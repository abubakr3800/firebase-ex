// دالة حذف المهمة
async function deleteTask(taskId) {
  if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
    try {
      await db.collection('tasks').doc(taskId).delete();
      console.log('تم حذف المهمة بنجاح');
    } catch (error) {
      console.error('حدث خطأ أثناء حذف المهمة:', error);
      alert('حدث خطأ أثناء حذف المهمة');
    }
  }
}

// دالة تبديل حالة الإكمال
async function toggleComplete(taskId, currentStatus) {
  try {
    await db.collection('tasks').doc(taskId).update({
      completed: !currentStatus,
      status: !currentStatus ? 'completed' : 'pending'
    });
  } catch (error) {
    console.error('حدث خطأ أثناء تحديث المهمة:', error);
    alert('حدث خطأ أثناء تحديث حالة المهمة');
  }
}