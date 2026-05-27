export const triviaQuestions = [
  {
    id: 1,
    question: "Which dimension of Data Quality ensures that data is available when needed?",
    options: ["Accuracy", "Completeness", "Timeliness", "Validity"],
    correctAnswer: 2,
    explanation: "Timeliness ensures that data is recorded and accessible within the expected time frame for its intended use."
  },
  {
    id: 2,
    question: "In SQL, which command is used to remove all records from a table but keep the structure intact?",
    options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
    correctAnswer: 2,
    explanation: "TRUNCATE deletes all rows from a table much faster than DELETE and keeps the table structure."
  },
  {
    id: 3,
    question: "What does 'ETL' stand for in data engineering?",
    options: ["Extract, Transform, Load", "Evaluate, Test, Launch", "Export, Transfer, Link", "Execute, Track, Log"],
    correctAnswer: 0,
    explanation: "ETL stands for Extract, Transform, and Load—the standard process of copying data from sources to a destination."
  },
  {
    id: 4,
    question: "Which machine learning algorithm is typically used for predicting a continuous numeric value?",
    options: ["Logistic Regression", "Linear Regression", "K-Means Clustering", "Naive Bayes"],
    correctAnswer: 1,
    explanation: "Linear Regression predicts continuous values (e.g., house prices), while Logistic Regression is for classification."
  },
  {
    id: 5,
    question: "What is 'Data Governance'?",
    options: [
      "A software tool for cleaning data",
      "The process of backing up databases",
      "A framework of roles, policies, and processes to ensure data quality and security",
      "The act of visualizing data trends"
    ],
    correctAnswer: 2,
    explanation: "Data Governance is a comprehensive framework that manages data availability, usability, integrity, and security."
  }
];
