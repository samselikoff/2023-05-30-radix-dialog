# Script

Start out with list of cards with user details. Want to add modal to edit each user.

Start with import:

```tsx
import * as Dialog from "@radix-ui/react-dialog";
```

First step is to find the button that should open the dialog, and wrap it in `Dialog.Root`.

Now a Dialog has two parts: the trigger, and the content:

```tsx
<Dialog.Root>
  <Dialog.Trigger className="rounded p-2 hover:bg-gray-200">
    <Pencil1Icon />
  </Dialog.Trigger>

  <Dialog.Content>Let's see if this works</Dialog.Content>
</Dialog.Root>
```

It works! Opens and closes when we press the button. But it doesn't look like a modal. This is because Radix is unstyled.

Fortunately Radix can help us make this look more look a modal. Let's wrap our content in portal.

```tsx
<Dialog.Portal>
  <Dialog.Content>Let's see if this works</Dialog.Content>
</Dialog.Portal>
```

Show in DOM. Uses a React portal, makes it easy to style elements like that this that sit on top of other parts of the UI.

Since we're out here we can style this with fixed positioning to make it centered in the screen. Let's add some classes to our Content:

```tsx
<Dialog.Content className="fixed bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow-lg">
  {/* ... */}
</Dialog.Content>
```

Nice! But usually modals have an overlay that dim the rest of the interface. Again, Radix has our back.

```tsx
<Dialog.Root>
  <Dialog.Trigger className="rounded p-2 hover:bg-gray-200">
    <Pencil1Icon />
  </Dialog.Trigger>

  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
    <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow-lg">
      Let's see if this works
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

Boom! Check out all the features we get:

- click outside to close
- escape to close
- scroll lock
- tab cycling
- maintains scroll position (doesn't jump to top)

And all while still having complete control over the styling of our modal.

Now that our modal looks good, we can add any content we want to here. Build out the form.

```tsx
<Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow-lg">
  <div className="flex items-center justify-between">
    <h2 className="text-xl">Edit contact</h2>
    <button className="text-gray-400 hover:text-gray-500">
      <Cross1Icon />
    </button>
  </div>

  <div className="mt-6">
    <UserFields user={user} />
  </div>

  <div className="mt-8 space-x-6 text-right">
    <button className="rounded px-3 py-2 text-sm text-gray-500 hover:text-gray-600">
      Cancel
    </button>
    <button className="rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">
      Save
    </button>
  </div>
</Dialog.Content>
```

We've added some elements, everything still looks good... but our new close button doesn't work.

Let's replace with Dialog.Close:

```tsx
<h2 className="text-xl">Edit contact</h2>
<Dialog.Close className="text-gray-400 hover:text-gray-500">
  <Cross1Icon />
</Dialog.Close>
```

Boom – closes the modal! Let's also change our Cancel button to `Dialog.Close`.

So cool how all these components share the same state internally, letting us not have to worry about managing any new state, and letting us easily wrap our custom JSX with these unstyled Radix components.

There's even another component we can use in our dialog – we can replace "Edit user" with `<Dialog.Title>`. This doesn't change the behavior, but if we look in the DOM, we'll see this connects our title to the root dialog's aria-labelledby. So Radix's components also ensure our custom dialog and other UI components are properly marked up with things like aria attributes, so if a browser or device ever takes advantage of these, we'll be sure our custom components take advantage.

Everything's looking good, all the radix behavior is still working, but we've got one piece left – our save button.

In the next video we'll wire this up to save our changes then programatically close the modal.
