// var searchInsert = function (nums, target) {
//     if (nums.indexOf(target) !== -1) return nums.indexOf(target)
//
//     let currentTarget = target
//     let currentIndex = null
//
//     while (nums.indexOf(currentTarget) === -1) {
//         if (target > nums[nums.length - 1]) {
//             currentTarget--
//         } else currentTarget++
//
//         console.log(currentTarget)
//     }
//
//
//     return currentTarget - target
// };
//
// console.log(searchInsert([1, 3, 5, 6], 7))
//
// //https://leetcode.com/problems/search-insert-position/description/
//
//
// // let start = 0
// // let end = nums.length - 1
// //
// // if (nums.indexOf(target)) return nums.indexOf(target)
// //
// // // while (start <= end) {
// // //     const mid = Math.ceil((end + start) / 2)
// // //
// // //     if (mid === target) return mid
// // //
// // //     if (target > mid) start = mid + 1
// // //     else end = mid - 1;
// // // }
// //
// // return null