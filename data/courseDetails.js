export const courseDetails = {
  courseId: "ANTH101",
  thumbnail:
    "https://plus.unsplash.com/premium_photo-1661906977668-ece2c96385c4?w=900&auto=format&fit=crop&q=60",
  title: "Introduction to Anthropology",
  description:
    "An overview of cultural, biological, linguistic, and archaeological anthropology, exploring human diversity across time and space.",
  semester: "Fall 2025",
  credits: 3,
  instructor: {
    id: "T001",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    profileImage: "/images/faculty/sarah-johnson.jpg",
  },
  enrolledStudents: [
    {
      id: "S001",
      name: "Alice Ahmed",
      email: "alice.ahmed@student.university.edu",
    },
    {
      id: "S002",
      name: "Rahim Khan",
      email: "rahim.khan@student.university.edu",
    },
  ],
  resources: [
    {
      id: "R001",
      title: "Lecture Slides - Week 1",
      type: "document",
      url: "/resources/week1-slides.pdf",
      uploadedBy: "T001",
      uploadedAt: "2025-08-14T10:30:00Z",
    },
    {
      id: "R002",
      title: "Anthropology Basics Video",
      type: "video",
      url: "https://youtu.be/examplevideo",
      uploadedBy: "T001",
      uploadedAt: "2025-08-14T12:00:00Z",
    },
  ],
  announcements: [
    {
      id: "A001",
      title: "First Class Reminder",
      message:
        "Our first class will be held on September 5th at 10 AM in Room 204.",
      postedBy: "T001",
      postedAt: "2025-08-10T09:00:00Z",
    },
  ],
  schedule: [
    {
      week: 1,
      topic: "Foundations of Anthropology",
      date: "2025-09-05",
    },
    {
      week: 2,
      topic: "Culture and Society",
      date: "2025-09-12",
    },
  ],
};
