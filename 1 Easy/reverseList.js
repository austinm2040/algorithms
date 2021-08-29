/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

/*
Base case: check if linked list is at end
 head = null or head.next = null
 if so --> return head
define recursion with parameter head.next
head.next.next = head
head.next = null
*/

const reverseList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  let switch = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return switch;
};