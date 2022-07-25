# React Context

## Review

[Traverse a tree in 5 minutes!](https://replit.com/@rkgallaway/tree-traversal#index.js)

## HashTables

- Keys - iterate thru array, remember Object.keys.  instructions mention no collisions:  could totally rewrite your version to accommodate in that manner.  or just grab the head of linked list, or traverse entire linked list and return all keys

- Lab-29 Has been Code Reviewed and is on video... reach out with questions

## Global State With Context

Context is an object that can be consumed (read/updated) by ant children of the provider.

- Provider: maintains an internal state that is accessible to ANY child of the provider
- Consumers: child components that may opt into context values/behaviors.

When to use:  when you need to share information across multiple sibling components.  

* Settings read by all components.
    * Theme values.
    * Twitter, emails, lists of products.

When not to use: Forms / Complex Component groups that directly share values that other sibling components have no business accessing
  * Input values.
  * Component toggle value.

## TDD: Testing Context Objects
