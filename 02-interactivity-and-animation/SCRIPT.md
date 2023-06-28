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