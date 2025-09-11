// @leet start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let total = nums1.length + nums2.length
    let half = Math.floor((total + 1) / 2)

    const [A, B] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1]
    let left = 0
    let right = A.length
    while (left <= right) {
        const MidA = Math.floor((left + right) / 2)
        const MidB = half - MidA

        const leftA = MidA > 0 ? A[MidA - 1] : Number.MIN_SAFE_INTEGER
        const rightA = MidA < A.length ? A[MidA] : Number.MAX_SAFE_INTEGER
        const leftB = MidB > 0 ? B[MidB - 1] : Number.MIN_SAFE_INTEGER
        const rightB = MidB < B.length ? B[MidB] : Number.MAX_SAFE_INTEGER

        if (leftA <= rightB && leftB <= rightA) {
            if (total % 2 !== 0) {
                return Math.max(leftA, leftB)
            }

            return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
        } else if (leftA > rightB) {
            right = MidA - 1;
        } else {
            left = MidA + 1
        }
    }
    return -1
};
// @leet end
