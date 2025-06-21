// دالة لجلب المهام حسب الأولوية
async function getTasksByPriority(priority) {
  try {
    const querySnapshot = await db.collection('tasks')
      .where('priority', '==', priority)
      .orderBy('createdAt', 'desc')
      .get();
    
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return tasks;
  } catch (error) {
    console.error(`حدث خطأ أثناء جلب المهام ذات الأولوية ${priority}:`, error);
    throw error;
  }
}

// مثال للاستخدام
getTasksByPriority('high').then(tasks => {
  console.log('المهام العالية الأولوية:', tasks);
});