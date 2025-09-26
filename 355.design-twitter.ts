// @leet start
class Twitter {
    count: number
    followMap: Map<number, Set<number>>
    tweetMap: Map<number, [number, number][]>
    constructor() {
        this.count = 0;
        this.followMap = new Map();
        this.tweetMap = new Map();
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, [])
        }

        this.tweetMap.get(userId)?.push([this.count, tweetId])
        this.count++;

    }

    getNewsFeed(userId: number): number[] {
        let res: number[] = [];

        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set())
        }

        let followMap = this.followMap.get(userId)

        if (!followMap) {
            return res;
        }

        followMap.add(userId)


        let heap: PriorityQueue<[number, number, number, number]> = new PriorityQueue((a, b) => b[0] - a[0])

        for (let followeeId of followMap) {
            let tweets = this.tweetMap.get(followeeId)
            if (tweets) {
                const idx = tweets.length - 1;
                let [count, tweetId] = tweets[idx]
                heap.enqueue([count, tweetId, idx - 1, followeeId])
            }
        }

        while (!heap.isEmpty() && res.length < 10) {
            const [_, tweetId, nextIndex, followeeId] = heap.dequeue();
            res.push(tweetId);
            if (nextIndex >= 0) {
                let tweets = this.tweetMap.get(followeeId);
                if (tweets) {
                    const [olderCount, olderTweetId] = tweets
                    [nextIndex];
                    heap.enqueue([
                        olderCount,
                        olderTweetId,
                        nextIndex - 1,
                        followeeId,
                    ]);

                }
            }
        }

        return res;
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set())
        }

        this.followMap.get(followerId)?.add(followeeId)
    }

    unfollow(followerId: number, followeeId: number): void {
        this.followMap.get(followerId)?.delete(followeeId)
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @leet end
