// إضافة مهمة جديدة
document.getElementById('taskForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  
  try {
    await db.collection('tasks').add({
      title,
      description,
      priority,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      status: 'pending',
      completed: false
    });
    
    console.log('تم إضافة المهمة بنجاح!');
    document.getElementById('taskForm').reset();
  } catch (error) {
    console.error('حدث خطأ أثناء إضافة المهمة:', error);
    alert('حدث خطأ أثناء إضافة المهمة، الرجاء المحاولة مرة أخرى');
  }
});