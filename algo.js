// 141. Linked List Cycle



// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.





/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Step 1: Initialize two pointers, slow and fast, both starting at the head.
    let slow = head;
    let fast = head;

    // Step 2: Traverse the linked list using both pointers.
    // - Slow pointer moves one step at a time.
    // - Fast pointer moves two steps at a time.
    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // Move slow pointer one step ahead.
        fast = fast.next.next;      // Move fast pointer two steps ahead.

        // Step 3: If at any point slow and fast pointers meet, there is a cycle.
        if (slow === fast) {
            return true;  // Cycle detected.
        }
    }

    // Step 4: If the loop exits, it means fast reached the end of the list, indicating no cycle.
    return false;
};
