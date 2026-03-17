
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@gmail.com",
    password: "123",
    role: 'employee',

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve login authentication issue",
        date: "2026-03-16",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update dashboard UI",
        description: "Improve styling of dashboard page",
        date: "2026-03-17",
        category: "UI",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write API documentation",
        description: "Document user authentication API",
        date: "2026-03-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "Priya@gmail.com",
    password: "123",
    role: 'employee',

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        title: "Create signup page",
        description: "Develop signup page with validation",
        date: "2026-03-16",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix navbar issue",
        description: "Navbar not responsive on mobile",
        date: "2026-03-17",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize images",
        description: "Compress images for faster loading",
        date: "2026-03-18",
        category: "Performance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Add dark mode",
        description: "Implement dark theme support",
        date: "2026-03-19",
        category: "Feature",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "amit@gmail.com",
    password: "123",
    role: 'employee',

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Integrate payment API",
        description: "Connect payment gateway to checkout",
        date: "2026-03-16",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix checkout bug",
        description: "Checkout page crashes on submit",
        date: "2026-03-17",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Database backup",
        description: "Create automated backup script",
        date: "2026-03-18",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "neha@gmail.com",
    password: "123",
    role: 'employee',

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        title: "Build profile page",
        description: "Create profile page layout",
        date: "2026-03-16",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS issue",
        description: "Alignment problem in form fields",
        date: "2026-03-17",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Implement search",
        description: "Add search functionality to dashboard",
        date: "2026-03-18",
        category: "Feature",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Test login flow",
        description: "Perform QA testing for login",
        date: "2026-03-19",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikas",
    email: "vikas@gmail.com",
    password: "123",
    role: 'employee',

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Setup project repo",
        description: "Initialize GitHub repository",
        date: "2026-03-16",
        category: "Setup",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create API routes",
        description: "Develop REST API routes for tasks",
        date: "2026-03-17",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix server error",
        description: "Resolve 500 error in API",
        date: "2026-03-18",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];
const admin = [
  {
    id: 1,
    firstName: "Bhanu",
    email: "admin@gmail.com",
    password: "123",
    role: 'admin'
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}