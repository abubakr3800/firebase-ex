window.addEventListener('beforeunload', () => {
  if (tasksUnsubscribe) tasksUnsubscribe();
});