INSERT INTO user (name, email, password, role) VALUES ('Carlos Alvarado', 'carlos@gmail.com','password123', 'Admin');
INSERT INTO comment (user_id, comment, approved)
VALUES
    (LAST_INSERT_ID(), 'Good portfolio design', true),
    (LAST_INSERT_ID(), 'User interface experience is amazing', false);

INSERT INTO user (name, email, password, role) VALUES ('Andrew Badea', 'andrewbadea1996@gmail.com','securePass456', 'User');
INSERT INTO comment (user_id, comment, approved)
VALUES
    (LAST_INSERT_ID(), 'Great portfolio, I loved the unique choice of colors used !', true);

INSERT INTO user (name, email, password, role) VALUES ('Ethan Clark', 'ethan.clark@example.com','ethanCode987', 'User');
INSERT INTO comment (user_id, comment, approved)
VALUES
    (LAST_INSERT_ID(), 'The animations and smooth transitions make the site feel super polished. Great job!', true),
    (LAST_INSERT_ID(), 'Really love the color scheme! It feels modern and clean.', true);

INSERT INTO user (name, email, password, role) VALUES ('Fiona Adams', 'fiona.adams@example.com','fionaSuper321', 'User');
INSERT INTO comment (user_id, comment, approved)
VALUES
    (LAST_INSERT_ID(), 'Your attention to detail is amazing! Everything is so well-organized.', true),
    (LAST_INSERT_ID(), 'The UI/UX design is so intuitive! It’s very easy to navigate.', true);

INSERT INTO user (name, email, password, role) VALUES ('George Miller', 'george.miller@example.com','georgeTech654', 'User');
INSERT INTO comment (user_id, comment, approved)
VALUES
    (LAST_INSERT_ID(), 'This project is incredibly well-structured! You clearly put a lot of thought into it.', true),
    (LAST_INSERT_ID(), 'I love how fast and responsive everything is. Keep up the great work!', true);

INSERT INTO user (name, email, password, role) VALUES ('Hannah Lee', 'hannah.lee@example.com', 'hannahSecret789', 'User');
INSERT INTO comment (user_id, comment, approved)
VALUES
    (LAST_INSERT_ID(), 'The documentation is super clear and helpful. Everything is easy to understand.', true),
    (LAST_INSERT_ID(), 'Fantastic work! The performance is excellent, and it runs so smoothly.', true);

INSERT INTO project (name, description, cover_Image, reviews, type, github_Link, start_Date, end_Date, images, tech_Stack, features, knowledge, summary)
VALUES (
        'Casa Control',
        'Flask web application that allows users to control and monitor a smart home system powered by a Raspberry Pi.',
        'portcasa7.jpg',
        5, 'Internet Of Things',
        'https://github.com/Carlos-123321/CasaControl-App',
        '2023-11-20', '2024-12-3',
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
        '2023-10-20',
        '2023-12-16',
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
        '2025-03-12',
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
        '2024-09-15',
        '2025-10-27',
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
        '2024-12-30',
        '2025-1-4',
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
        '2024-08-25',
        '2025-02-25',
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


INSERT INTO about (id,about_Me_Text, title)
VALUES (123,
           'longTextAboutMe',
        'About Me 📌'
       );

INSERT INTO skills (id,title,soft_Skills,frontend_technologies, backend_technologies)
VALUES (123,
        'Skills 🧠',
        '["Communication", "Problem-solving", "Time Management", "Adaptability", "Collaboration", "Attention to Detail", "Leadership", "Creative Thinking", "Customer Focus"]',
        '[
            {
                "id": 1,
                "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                "proficiency": 9
            },
          {
            "id": 2,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            "proficiency": 9
          },
          {
            "id": 3,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            "proficiency": 8
          },
          {
            "id": 4,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            "proficiency": 7
          },
          {
            "id": 5,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            "proficiency": 8
          },
          {
            "id": 6,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
            "proficiency": 8
          },
          {
            "id": 7,
            "imageUrl": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
            "proficiency": 6
          },
          {
            "id": 8,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
            "proficiency": 5
          }
        ]',
        '[
            {
                "id": 1,
                "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
                "proficiency": 8
            },
          {
            "id": 2,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
            "proficiency": 	6
          },
          {
            "id": 3,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            "proficiency": 6
          },
          {
            "id": 4,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
            "proficiency": 8
          },
          {
            "id": 5,
            "imageUrl": "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
            "proficiency": 8
          },
          {
            "id": 6,
            "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
            "proficiency": 8
          },
          {
            "id": 7,
            "imageUrl": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
            "proficiency": 9
          }
        ]'
       );


INSERT INTO reviews (id,title)
VALUES (123,
        'Reviews ✨'
       );

INSERT INTO intro (id,title, second_Title, third_Title, image)
VALUES (123,
        'introLine',
        'introSecondLine',
        'introThirdLine',
        'https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-panthea-leo-Namibia.jpg'
       );

INSERT INTO journey (id,title, academic)
VALUES (123,
        'My Academic Journey 📚',
        '[
          {
            "id": 1,
            "innerTitle": "Champlain College Saint-Lambert",
            "degree": "Computer Science Technology",
            "attendance": "2021 - 2025",
            "description": "Focused on software development, networking, and cybersecurity."
          },
          {
            "id": 2,
            "innerTitle": "École secondaire Gerard-Filion",
            "degree": "High School Diploma",
            "attendance": "2016 - 2021",
            "description": "Focused on completing high school"
          }
        ]'
       );


INSERT INTO work (id,title, paragraph)
VALUES (123,
        'My Projects',
        'Welcome to my portfolio. Here you’ll find a selection of my work. Explore my projects to learn more about what I do.'
       );

INSERT INTO hobby (id,title,below,hobbies)
VALUES (123,
        'Pastimes 🎭',
        'I am someone who does a lot of exercise...',
        '[
          {
            "id": 1,
            "description": "I play Soccer at a competitive level ⚽",
            "image": "https://www.sportscontact.ca/cdn/shop/collections/9_SOCCERWEB_a35f01c3-d170-47f6-b8f2-6e489a57af8d_1600x.jpg?v=1642526786"
          },
          {
            "id": 2,
            "description": "I like running. I can run 5km in 18 minutes 🏃💨",
            "image": "https://media.licdn.com/dms/image/v2/D4D12AQGNiu9PurkDPg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706447614752?e=2147483647&v=beta&t=wlJaZM44NA9pklh0MHVACnEx41lbLxCcFbjvn54aad4"
          },
          {
            "id": 3,
            "description": "I go to the gym regularly 🏋️",
            "image": "https://www.nautilusplus.com/wordpress/photo-gallery-uploads/photo-gallery/Long_3.JPG"
          }
        ]'
       );