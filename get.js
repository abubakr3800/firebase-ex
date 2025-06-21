// دالة لجلب وعرض المهام
function setupTasksListener() {
  // إلغاء أي اشتراك سابق
  if (tasksUnsubscribe) tasksUnsubscribe();
  
  // الاشتراك للحصول على التحديثات الفورية
  tasksUnsubscribe = db.collection('tasks')
    .orderBy('createdAt', 'desc')
    .onSnapshot((querySnapshot) => {
      const tasksContainer = document.getElementById('tasksContainer');
      tasksContainer.innerHTML = '';
      
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        const taskElement = document.createElement('div');
        taskElement.className = `task-card ${task.priority}-priority`;
        
        taskElement.innerHTML = `
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <div class="task-meta">
            <span>الأولوية: ${getPriorityText(task.priority)}</span>
            <span>الحالة: ${getStatusText(task.status)}</span>
            <span>تاريخ الإنشاء: ${formatDate(task.createdAt)}</span>
          </div>
          <button onclick="deleteTask('${doc.id}')">حذف</button>
          <button onclick="toggleComplete('${doc.id}', ${task.completed})">
            ${task.completed ? 'إلغاء الإكمال' : 'تمت'}
          </button>
        `;
        
        tasksContainer.appendChild(taskElement);
      });
    });
}

// الدوال المساعدة
function getPriorityText(priority) {
  const priorities = {
    high: 'عالي',
    medium: 'متوسط',
    low: 'منخفض'
  };
  return priorities[priority] || priority;
}

function getStatusText(status) {
  const statuses = {
    pending: 'قيد الانتظار',
    'in-progress': 'قيد التنفيذ',
    completed: 'مكتمل'
  };
  return statuses[status] || status;
}

function formatDate(timestamp) {
  if (!timestamp) return 'غير محدد';
  const date = timestamp.toDate();
  return date.toLocaleString('ar-EG');
}

// تشغيل الاشتراك عند تحميل الصفحة
window.addEventListener('load', setupTasksListener);