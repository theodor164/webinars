const webinars = [
  {
    id: 1,
    shortTitle: "Webinar 1",
    longTitle: "Webinar 1: Introduction to Web Development",
    shortDescription: "Learn the basics of web development",
    longDescription:
      "In this webinar, you will learn the basics of web development. We will cover HTML, CSS, and JavaScript.",
    agenda: [
      "Introduction to HTML",
      "Introduction to CSS",
      "Introduction to JavaScript",
    ],
    date: "2025-03-29",
    time: "10:00 AM",
    duration: "1 hour",
    registrationLink: "https://example.com/webinar1",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "John Doe",
        title: "Web Developer",
        company: "ABC Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Jane Smith",
        title: "Web Developer",
        company: "XYZ Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["web development", "HTML", "CSS", "JavaScript", "category1"],
    keywords: ["web development", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    shortTitle: "Webinar 2",
    longTitle: "Webinar 2: Introduction to React",
    shortDescription: "Learn the basics of React",
    longDescription:
      "In this webinar, you will learn the basics of React. We will cover components, props, and state.",
    agenda: [
      "Introduction to React",
      "Components and Props",
      "State and Lifecycle",
    ],
    date: "2025-04-10",
    time: "2:00 PM",
    duration: "1.5 hours",
    registrationLink: "https://example.com/webinar2",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Alice Johnson",
        title: "Frontend Developer",
        company: "123 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Bob Brown",
        title: "Software Engineer",
        company: "456 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["React", "components", "props", "state", "category1"],
    keywords: ["React", "components", "props", "state"],
  },
  {
    id: 3,
    shortTitle: "Webinar 3",
    longTitle: "Webinar 3: Introduction to Node.js",
    shortDescription: "Learn the basics of Node.js",
    longDescription:
      "In this webinar, you will learn the basics of Node.js. We will cover server-side JavaScript, npm, and Express.",
    agenda: [
      "Introduction to Node.js",
      "Server-side JavaScript",
      "npm and Express",
    ],
    date: "2025-05-07",
    time: "4:00 PM",
    duration: "2 hours",
    registrationLink: "https://example.com/webinar3",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Eve White",
        title: "Full Stack Developer",
        company: "789 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Charlie Green",
        title: "Backend Developer",
        company: "012 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["Node.js", "server-side JavaScript", "npm", "Express", "category1"],
    keywords: ["Node.js", "server-side JavaScript", "npm", "Express"],
  },
  {
    id: 4,
    shortTitle: "Webinar 4",
    longTitle: "Webinar 4: Introduction to MongoDB",
    shortDescription: "Learn the basics of MongoDB",
    longDescription:
      "In this webinar, you will learn the basics of MongoDB. We will cover NoSQL databases, document-oriented data, and CRUD operations.",
    agenda: ["Introduction to MongoDB", "NoSQL databases", "CRUD operations"],
    date: "2025-06-01",
    time: "6:00 PM",
    duration: "1.5 hours",
    registrationLink: "https://example.com/webinar4",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Grace Brown",
        title: "Database Administrator",
        company: "345 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "David Black",
        title: "Data Engineer",
        company: "678 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["MongoDB", "NoSQL", "CRUD operations"],
    keywords: ["MongoDB", "NoSQL", "CRUD operations"],
  },
  {
    id: 5,
    shortTitle: "Webinar 5",
    longTitle: "Webinar 5: Introduction to GraphQL",
    shortDescription: "Learn the basics of GraphQL",
    longDescription:
      "In this webinar, you will learn the basics of GraphQL. We will cover queries, mutations, and subscriptions.",
    agenda: [
      "Introduction to GraphQL",
      "Queries and Mutations",
      "Subscriptions",
    ],
    date: "2024-12-03",
    time: "8:00 PM",
    duration: "2 hours",
    registrationLink: "https://example.com/webinar5",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Frank Red",
        title: "Full Stack Developer",
        company: "901 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Hannah Blue",
        title: "Frontend Developer",
        company: "234 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["GraphQL", "queries", "mutations", "subscriptions", "category1"],
    keywords: ["GraphQL", "queries", "mutations", "subscriptions"],
  },
  {
    id: 6,
    shortTitle: "Webinar 6",
    longTitle: "Webinar 6: Introduction to Docker",
    shortDescription: "Learn the basics of Docker",
    longDescription:
      "In this webinar, you will learn the basics of Docker. We will cover containers, images, and Dockerfile.",
    agenda: ["Introduction to Docker", "Containers and Images", "Dockerfile"],
    date: "2024-11-15",
    time: "10:00 AM",
    duration: "1.5 hours",
    registrationLink: "https://example.com/webinar6",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Ivy Green",
        title: "DevOps Engineer",
        company: "567 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Jack White",
        title: "Cloud Architect",
        company: "890 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["Docker", "containers", "images", "Dockerfile", "category1"],
    keywords: ["Docker", "containers", "images", "Dockerfile"],
  },
  {
    id: 7,
    shortTitle: "Webinar 7",
    longTitle: "Webinar 7: Introduction to Kubernetes",
    shortDescription: "Learn the basics of Kubernetes",
    longDescription:
      "In this webinar, you will learn the basics of Kubernetes. We will cover pods, deployments, and services.",
    agenda: ["Introduction to Kubernetes", "Pods and Deployments", "Services"],
    date: "2024-10-20",
    time: "2:00 PM",
    duration: "2 hours",
    registrationLink: "https://example.com/webinar7",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Kevin Black",
        title: "DevOps Engineer",
        company: "123 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Lily White",
        title: "Cloud Architect",
        company: "456 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["Kubernetes", "pods", "deployments", "services", "category2"],
    keywords: ["Kubernetes", "pods", "deployments", "services"],
  },
  {
    id: 8,
    shortTitle: "Webinar 8",
    longTitle: "Webinar 8: Introduction to AWS",
    shortDescription: "Learn the basics of AWS",
    longDescription:
      "In this webinar, you will learn the basics of AWS. We will cover EC2, S3, and RDS.",
    agenda: ["Introduction to AWS", "EC2 and S3", "RDS"],
    date: "2025-09-25",
    time: "4:00 PM",
    duration: "1.5 hours",
    registrationLink: "https://example.com/webinar8",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Mary Green",
        title: "Cloud Architect",
        company: "789 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Nick Brown",
        title: "DevOps Engineer",
        company: "012 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["AWS", "EC2", "S3", "RDS", "cloud computing", "category2"],
    keywords: ["AWS", "EC2", "S3", "RDS", "cloud computing"],
  },
  {
    id: 9,
    shortTitle: "Webinar 9",
    longTitle: "Webinar 9: Introduction to Azure",
    shortDescription: "Learn the basics of Azure",
    longDescription:
      "In this webinar, you will learn the basics of Azure. We will cover VMs, Blob Storage, and SQL Database.",
    agenda: ["Introduction to Azure", "VMs and Blob Storage", "SQL Database"],
    date: "2025-08-30",
    time: "6:00 PM",
    duration: "2 hours",
    registrationLink: "https://example.com/webinar9",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Oliver White",
        title: "Cloud Architect",
        company: "345 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Penny Black",
        title: "DevOps Engineer",
        company: "678 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["Azure", "VMs", "Blob Storage", "SQL Database", "category2"],
    keywords: ["Azure", "VMs", "Blob Storage", "SQL Database"],
  },
  {
    id: 10,
    shortTitle: "Webinar 10",
    longTitle: "Webinar 10: Introduction to GCP",
    shortDescription: "Learn the basics of GCP",
    longDescription:
      "In this webinar, you will learn the basics of GCP. We will cover Compute Engine, Cloud Storage, and Cloud SQL.",
    agenda: ["Introduction to GCP", "Compute Engine and Cloud Storage", "Cloud SQL"],
    date: "2025-07-15",
    time: "8:00 PM",
    duration: "1.5 hours",
    registrationLink: "https://example.com/webinar10",
    image:
      "https://oarb.cursuri.online/Pictures/GetPictureById?pictureId=90cc4b9a-6eae-4367-aa8e-a88d540e09a9",
    speakers: [
      {
        name: "Quinn Green",
        title: "Cloud Architect",
        company: "901 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
      {
        name: "Ryan Black",
        title: "DevOps Engineer",
        company: "234 Web Development",
        speakerImage: "https://via.placeholder.com/150",
      },
    ],
    categories: ["GCP", "Compute Engine", "Cloud Storage", "Cloud SQL", "category2"],
    keywords: ["GCP", "Compute Engine", "Cloud Storage", "Cloud SQL"],
  },
];
