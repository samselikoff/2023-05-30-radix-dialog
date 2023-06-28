```jsx
useContacts()
```

create a ContactCard


rename UserFields, use Contact type

wrap in form, handleSubmit

```tsx
async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const attrs = Object.fromEntries(new FormData(event.currentTarget));

  await updateContact(contact.id, attrs);
}
```

Controlled

```tsx
<Dialog.Root open={open} onOpenChange={setOpen}>
```

Saving UI

```tsx
<button className="relative inline-flex items-center justify-center rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">

<Spinner className="h-4 group-enabled:opacity-0" />
```

```css
@keyframes dialog-overlay-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes dialog-overlay-hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes dialog-content-show {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes dialog-content-hide {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
}
```