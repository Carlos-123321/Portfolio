INSERT INTO user (name, email, comment, password) VALUES ('John Doe', 'john.doe@example.com', '["John Doe is commenting."]', 'password123');
INSERT INTO user (name, email, comment, password) VALUES ('Jane Smith', 'jane.smith@example.com', '["Jane Smith is commenting."]', 'securePass456');
INSERT INTO user (name, email, comment, password) VALUES ('Alice Johnson', 'alice.johnson@example.com', '["Alice Johnson is commenting."]', 'alicePass789');
INSERT INTO user (name, email, comment, password) VALUES ('Bob Brown', 'bob.brown@example.com', '["Bob Brown is commenting."]', 'bobSecure@123');
INSERT INTO user (name, email, comment, password) VALUES ('Charlie Wilson', 'charlie.wilson@example.com', '["Charlie Wilson is commenting."]', 'charlieStrong456');
INSERT INTO user (name, email, comment, password) VALUES ('Diana Prince', 'diana.prince@example.com', '["Diana Prince is commenting."]', 'wonderWomanPass!');
INSERT INTO user (name, email, comment, password) VALUES ('Ethan Clark', 'ethan.clark@example.com', '["Ethan Clark is commenting."]', 'ethanCode987');
INSERT INTO user (name, email, comment, password) VALUES ('Fiona Adams', 'fiona.adams@example.com', '["Fiona Adams is commenting."]', 'fionaSuper321');
INSERT INTO user (name, email, comment, password) VALUES ('George Miller', 'george.miller@example.com', '["George Miller is commenting."]', 'georgeTech654');
INSERT INTO user (name, email, comment, password) VALUES ('Hannah Lee', 'hannah.lee@example.com', '["Hannah Lee is commenting."]', 'hannahSecret789');

INSERT INTO project (name, description, cover_Image, reviews, type, github_Link, start_Date, end_Date, images, tech_Stack, features, knowledge, summary)
VALUES (
        'Casa Control',
        'Flask web application that allows users to control and monitor a smart home system powered by a Raspberry Pi.',
        'portcasa7.jpg',
        5, 'Internet Of Things',
        'https://github.com/Carlos-123321/CasaControl-App',
        '2023-05-15', '2024-03-12',
        '["portcasa1.jpeg", "portcasa2.jpeg", "portcasa3.jpeg", "portcasa4.jpeg", "portcasa5.jpeg", "portcasa6.jpeg", "portcasa7.jpg", "portcasa8.png", "portcasa9.jpg", "portcasa10.jpg", "portcasa11.jpg", "portcasa12.jpg", "portcasa13.jpg"]',
        '["https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
]',
        '["Remote Control of LED lights",
"Remote Control of Switch",
"Remote Control of DHT11 Sensor for temperature",
"Remote Control of Active Buzzer"
]',
        '["Gained experience in building a full-stack IoT solution using Flask and Raspberry Pi.",
          "Learned how to interface hardware (e.g., LEDs, DHT11 sensor) with a web application.",
          "Implemented communication protocols to control smart devices remotely."]',
        '["The Casa Control project demonstrates how to create a Flask-based web application for controlling smart home devices. The app interacts with hardware powered by a Raspberry Pi to control LED lights, switches, and sensors. The project also emphasizes scalability and security in IoT systems."]'
       );
INSERT INTO project (name, description, cover_Image, reviews, type, github_Link, start_Date, end_Date, images, tech_Stack, features, knowledge, summary)
VALUES (
        'Resume Builder App',
        'A full-stack desktop application which allows the user to create a resume in pdf format based on informations entered. Additionally, the informations entered by the user are stored in a database.',
        'WPF1.jpg',
        4,
        'Desktop Application',
        'https://github.com/Carlos-123321/WPF-Resumer-Builder-App',
        '2023-05-15',
        '2024-03-12',
        '["WPF1.jpg", "WPF2.jpg", "WPF3.jpg", "WPF4.png", "WPF5.png", "WPF6.png", "WPF7.png"]',
        '["https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"]',
        '["Creates a PDF based on information provided",
"Stores information in PDF to a database",
"Previews the downloaded PDF in interactive interface"]',
        '["Developed a deep understanding of full-stack development using WPF and C#.",
          "Implemented functionalities to convert user data into a PDF format and handle file management.",
          "Integrated database functionalities to store, retrieve, and manage resume data efficiently.",
          "Gained expertise in working with C# and WPF for desktop application development."]',
        '["The Resume Builder App allows users to enter personal information and generate professional-looking resumes in PDF format. The app stores the information in a database for future edits and reuse. The intuitive interface makes it easy for users to interact with and customize their resume. This project highlights skills in full-stack development, database management, and working with PDF generation."]'
       );
INSERT INTO project (name, description, cover_Image, reviews, type, github_Link, start_Date, end_Date, images, tech_Stack, features, knowledge, summary)
VALUES (
        'Noble Nests App',
        'A full-stack hotel reservation web application designed for users to make reservations.',
        'NN1.jpg',
        5,
        'Web Application',
        'https://github.com/Carlos-123321/Hotel-Reservation-App',
        '2023-05-15',
        '2024-03-12',
        '["NN2.png", "NN1.jpg"]',
        '["https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        ]',
        '["Displays hotel info in Cards fetched from the backend",
          "Provides user friendly animations"]',
        '["Gained practical experience with Spring Boot and React in building a full-stack web application.",
          "Learned how to connect a Java backend with a React frontend, implementing RESTful APIs and handling HTTP requests.",
          "Improved knowledge of UI/UX design with React components and animations, providing an engaging user experience.",
          "Worked with databases to store hotel information and manage reservations effectively."]',
        '["The Noble Nests App allows users to view hotel information and make reservations in a seamless and intuitive interface. The app provides a dynamic and interactive experience by displaying hotel details through well-designed cards and smooth animations. This project allowed me to work with both frontend and backend technologies like Java, Spring Boot, TypeScript, and React. It showcases my ability to integrate frontend and backend functionality in a full-stack web application."]'
       );
INSERT INTO project (name, description, cover_Image, reviews, type, github_Link, start_Date, end_Date, images, tech_Stack, features, knowledge, summary)
VALUES (
        'Pet Clinic',
        'A one semester multi-year college project which immersed students in a real world software develoment environment',
        'PC1.jpg',
        5,
        'Web Application',
        'https://github.com/cgerard321/champlain_petclinic',
        '2023-05-15',
        '2024-03-12',
        '["PC2.jpg", "PC3.jpg", "PC4.jpg", "PC5.jpg", "PC1.jpg"]',
        '["https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        ]',
        '["Created the UI for the Inventory part of Pet Clinic",
          "Created feature to allow the user to upload an image"]',
        '["Gained hands-on experience working in a real-world software development project environment.",
          "Developed the user interface for the Inventory management section using React and integrated it with the backend APIs.",
          "Implemented a feature allowing users to upload images, enhancing the functionality and user interaction.",
          "Worked with a team in an agile development setup, learning best practices for collaboration and code management."]',
        '["The Pet Clinic project was an immersive, hands-on experience that gave me the opportunity to work on a real-world web application. My main contributions included designing and implementing the UI for the Inventory section, as well as developing a feature that allowed users to upload images to the application. This project enhanced my understanding of full-stack development, with practical exposure to technologies such as Java, Spring Boot, React, and TypeScript. It also provided valuable experience in working within a team, utilizing version control, and developing a product in an agile environment."]'
        );
INSERT INTO project (name, description, cover_Image, reviews, type, github_Link, start_Date, end_Date, images, tech_Stack, features, knowledge, summary)
VALUES (
        'C Project',
        'An exploration of the C programming language ',
        'C1.jpg',
        5,
        'Learning Experience',
        'https://github.com/Carlos-123321/CProject',
        '2023-05-15',
        '2024-03-12',
        '["C1.jpg"]',
        '["https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"]',
        '["Created a Bubble Sort Algorithm"]',
        '["Gained an in-depth understanding of C programming concepts, including memory management and data structures.",
          "Implemented and optimized algorithms like Bubble Sort to enhance problem-solving and computational thinking skills.",
          "Developed an appreciation for low-level programming, focusing on how memory is allocated and managed in C."]',
        '["The C Project was an exploration of the C programming language, where I focused on mastering fundamental concepts like memory management, pointers, and algorithms. One of my main accomplishments was creating a Bubble Sort algorithm, which reinforced my understanding of sorting techniques and computational efficiency. This project helped me build a solid foundation in low-level programming and enhanced my problem-solving abilities, preparing me for more complex projects in the future."]'
       );
INSERT INTO project (name, description, cover_Image, reviews, type, github_Link, start_Date, end_Date, images, tech_Stack, features, knowledge, summary)
VALUES (
        'External Client Project',
        'A multi semester project working with an external client ',
        'ECP1.jpg',
        5,
        'Web Application',
        '',
        '2023-05-15',
        '2024-03-12',
        '["ECP2.jpg", "ECP3.jpg", "ECP1.jpg"]',
        '["https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
"https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
"https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
"https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
]',
        '["Application has three types of users: Admin, Employee, Customer",
          "Each user has their personal dashboard",
          "Admin can manage Projects, Employees, Invoices, Services"]',
        '["Collaborated with an external client to develop a web application that serves various roles within an organization.",
          "Focused on the user experience for different user types, including Admin, Employee, and Customer.",
          "Worked on implementing features like personalized dashboards and user management systems for admins."]',
        '["The External Client Project was a multi-semester project where I worked with a client to build a comprehensive web application. The application serves three distinct types of users: Admins, Employees, and Customers, each having personalized dashboards. I was responsible for ensuring that the application was efficient in managing users and resources, with a focus on Admin capabilities to manage projects, invoices, and employees. Throughout the project, I collaborated closely with the client to align the product with their business needs, ensuring a successful delivery."]'
);