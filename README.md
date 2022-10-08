## Requirements

### Backend

- Non-authenticated users have read-only access (they can use search, but can’t create collections and items, can’t leave comments and likes).
- Authenticated not-admins have access to everything except admin-page.
- Admin-page allow user management — view; block; unblock; delete; add to admins; remove from admins.
- ADMIN IS ABLE TO REMOVE ADMIN ACCESS FROM ITSELF
- Admin see all pages as their author (for example, admin can open collection of other user and add an item it it; so, admin is virtually owner of every collection and every item).
- Only admin or creator of the collections or items can manage them (edit; add; delete). Everything is accessible for viewing for everyone (except admin page).
- Users can register and authenticate via site forms.
- Every pages (in the top header) provides an access to the full-text search. Search results are always items (e.g. if text is found in comment text, search result have to display link to the item with comments, not to the comment itself). If result is a collection you can either display any item or generate link to the collection.
- Every user has its personal page where they can mange list of collections (create new, delete, or edit) — each collection in the list is a link to the collection page that contains table of items with sorting/filtering and capabilities to create new item, edit or delete existing item).
- Every collection contains:
- name
- description (with markdown formatting support), topic (one value from the predefined list, for example, “Books”, “Signs”, “Silverware”), optional image (uploaded by the users into the cloud).
- collection allows to specified fields which every item in this collection will have. There are fixed fields: id, name, tags. And on the collection level user can select several of the following: 3 integer fields, 3 string fields, 3 multiline text fields, 3 boolean checkboxes, 3 date fields). For all selected custom fields user specifies its name.
  For example, I want to store a book collection. I can select (add to standard set of id+name+tags) additional string field “Author”, additional text field “Synopsis”, addition data field “Publication Year”. All fields should be rendered on the item page as well as on the collection page in the list of items (OK, not all of them, let’s say strings and dates).
- All items have tags (user can enter several tags; it’s necessary to support autocompletion — when user starts text entering, you have to display dropdown with tags starting with entered letter already stored in database).
- Main page contains:
  - list of the latest items (name, collections, authors);
  - list of the top 5 largest collections;
  - tag cloud (when the user clicks on the tag you display the list of items — in general you should use “search results page” for it).
    When item is opened for view (by author or another user) there are comments list at the bottom. Comments are linear, added to the end (it’s impossible to insert comment to previous comment). Comments have to be updated automatically — when item page is opened and somebody add a comment to it, it should be inserted (it’s possible to have a 2-5 second delay).
    Every item also can have likes (no more than one from one user per given item).
- Site should support two languages: English and any other — Polish, Uzbek, Georgian (user select one and the choice is saved). Site should support two visual themes (skins): light and dark (user select one and the choice is saved).
  It’s required:
- CSS-framework
- to support different screen resolutions
- to use ORM/ODM/... to access data (sequelize, prism, typeorm, anything you like),
- To use full-text search engine (either external library or using native database features) — use can’t perform full database scan with SELECTs.
