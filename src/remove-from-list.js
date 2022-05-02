const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(list, value) {
  let current = list;
  let next = list.next;
  let prev = null;
  
  while (next) {    
    if (current.value === value) {
      if (!prev) {
        list = list.next;
        current = current.next;
        next = current.next
      } else {
        prev.next = next;
        current = next;
        next = current.next;
      }      
    } else {
      prev = current;
      current = current.next;
      next = current.next;
    }
  }

  if (current.next === null) {
    if (current.value === value) {
      prev.next = null;
    }
  }

  return list;
}

module.exports = {
  removeKFromList
};
