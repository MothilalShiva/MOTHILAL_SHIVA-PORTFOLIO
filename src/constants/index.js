import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "3D Modeler (Blender)",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FULL STACK INTERN",
      company_name: "National Small Industries Corporation Ltd. (NSIC)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "JUNE 2024 (15 days)",
      points: [
        "Designed and developed responsive web applications with React and Node.js.",
        "Collaborated with UI/UX designers to implement high-quality interactive pages.",
        "Enhanced performance and scalability using component-based architecture and reusable code practices.",

      ],
    },
    {
      title: "FRONT END WEB DEVELOPMENT INTERN",
      company_name: "BLACK ARROW DATA MATRIX PVT LTD",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "JULY 2023 - AUGUST 2023 (15 days)",
      points: [
        "Developed user-centric interfaces for web applications using HTML5, CSS3, and JavaScript.",
        "Participated in code reviews and collaborated with cross-functional teams to ensure alignment with project goals and timelines.",
        
      ],
    },
    {
      title: "DATA ANALYTICS AND VISUALIZATION JOB SIMMULATION",
      company_name: "ACCENTURE via Forage",
      icon: shopify,
      iconBg: "#383E56",
      date: "SEPTEMBER 2024 (Virtual Internship)",
      points: [
        "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture",
        "Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions",
      
      ],
    },
    {
      title: "CYBERSECURITY JOB SIMMULATION",
      company_name: "JP MORGAN CHASE & CO via Forage",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "OCTOBER 2024 (Virtual Internship)",
      points: [
        "Engaged in application security fundamentals, focusing on risk assessment and mitigation strategies.",
        "Developed an email spam classifier using machine learning algorithms to enhance email filtering systems.",
        "Conducted vulnerability assessments and implemented security best practices to protect sensitive information.",
    
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Earned the Red Hat® Certified System Administrator (RHCSA®) certification, demonstrating proficiency in system administration, configuration, and troubleshooting in Red Hat Enterprise Linux environments.",
      name: "Red Hat",
      designation: "-",
      company: "April 2023",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA7VBMVEX///8AAADuAABra2vOzs6ioqLDw8PyAACpqamMjIxVVVX5+fkkJCTzAADAwMBRUVFeXl64uLjs7OzV1dXm5uY1NTX95+f+8/MNDQ1CQkLg4OAACAjyYGD3ra2CgoKampoaGhp4eHivr6+Ghob6xcX1j4/0g4P83d3wPDz4tbXwRET97u4+Pj771NT5wMD09PTuExPXDAyQCwvMCwvvISHzcXHzenrzbW3xVlbwMzP4paXWMTH1jY2PAAAzCgq5AAA+CQmkBgYjCQmzDAxrDQ17DAzKsrIqKioXBQVYCgpECAg1CwtRDAzcCwv2m5tsTkaPAAAF+klEQVR4nO2aa1/aOgCHabkUhCJ3uUwuijqdCIIy9ezIlG0eN933/zinTdJb2kBQsPzg/7yxaUmaPOaeRiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAZT6VbCzsJa0B1f77PLI9Vg3A01O+vA2PSg/t0zLr+qjOOTsHMVKheWh883qovb/flRN5aBKuJoL+y8hURXqMRsQumwsxcKX2c5UdWtbEGzlajqp7Az+PGcznOiHoedxQ/nZq4Tddt62r35StTTsDP5wexLOBmv7vX11SX9ds4knFyt5M2lfLOs5FaS9Pv4IqFkRocSUzxUo3npNxdIjKgVjJPgufN8l9xoiRPox1o7VenXLcCdlBPhkpBzYhKTfDPnJEmCu87zHLkRF8YnjzOSL1uIfzQZJ99E0QOcKAdyb15bJ8V/dRknZ6L4QU6UotSr19ZJRxlIVRRR/EAnbalXr6GTk9Oj65szRblXZaT0BKkwJ/WiSSzu61IKhX5ArLS5sFzUSb9UKrgTIY+f3lT2QC4+kZJqEyPZ7zJS7gQJMSdWkJZTSbFi1kio45mD9Fvk7u7BIk4SxqhNn9POqlYusxvGRTkj11hn0rM2TPQHM9nH1/l9imgdyDmJRJ2CZp3GFHUipLh2JuGk3nFHqJqG295E3u/EmblqU5JkYzpfiqSTpl1QT+Ez1i7MOadExgmvsbB8Jz1XSQcs0R/qPCuCvXzeSZUEjbbT8ua6LFDCO6kVY4ziruUkwkWpLd+JezKv/2SpNh70mb2K9kvGSYmWw+hj6/Si2jmkfQqdj9r/8Se7UJwTH6YT4rccjVpG67yl9zrh1sENK937iT6jruidmU68tK2Jecqrrc8eJ4zrdFLeSVrJZUnjK9FqmCQRyOVyxuIT7///0pai3E81UWXRR40LeSdF7zhLf3NgtSdr+KxLO4nYe8JZR/UynfR8pXUy0Bhe6kFaNPVRUa+CFj2CuT0tYDxBiLVZ4WkzskbmkrwTm9JqnPB7SB4pRmUZjjTDi0uMERz9pygTTf3k38P3O2mbE7amv3BtVoqyt3xy9SSZM1tNdae5GieRK17K4Ls3G43n4fRS1S0uH36bdx/M3sZ3Nuh3Qm5HA0rHSmFLCHRSy+YZ2XPbyQGX0vKd+HYHNH0YUITGn5fn5+eXeytMnKh8r2J1oP1+ms1hm3Oc2JtIgU5cW0w7lhNfDVq+k4CzC/31d0AhvIxoc+I6FfdYzEbakn1Z23FRs+YZizpJ02hPuVxtdU4Czv00ffJntpJ7a6D2Tt488xPFLlaCXPHjd9RVIsEaMMBJnvylPXNnVU7YZwQ+Ky8zlDQurV73VuyEzV2Lth62cRhj61lqyhpKOpJO4i69h7wTZwb9XgL3pTX9dVgVKRk58znPWal3HksD5sjCdg1q2VIp0bHH3wy9m2nl84cs5flOyIM2veeuaewN+US+uZQz7c9BUsioOwxoQ42f7u2EgdgJ6w2zxmXZmwTdUSn6057vhM7tqqlkvMPipFzPCcs55xedYBhaBpPhj0dnztJ4fhh4J/3uAZlbA9KQuZne56oc3ffgR1Wpcce3cKRO8st2ErkWSKFedO11NJpOp5PRQPctg9yNh3PCykwWKTV3MXbZdltW4eDOMoKcFIKduCrKsr4HmXP+pzECHv0VO4m4M5m3F79PWfsH/Q67t1P0SqBOXPsnzvlO3yp9hv7okP3CXmYv7RuZCj+hlcXtpJA1VzROkes0XKKhYrwTjTaT3PlnopVKHRhDUdYk5sT0BA3dJCUatxRvdprxYiSdde5ZScUTnm3ad3L0NiebfaJekTks9rHpn89eiL/vE7GaA/W1QuZbCw9b8X3b/kJ1ZQuqCaG7QL+y6b2JQ+WbpBLRIelm0p0xtbUYbE8tsegez1ZyFHYGw6Gyfy3ocq/utvMzc8pe927s7XVvx/vb12qC+HLS6xr0Ktv2yTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8KH8D08SZq1HhkbkAAAAAElFTkSuQmCC",
    },
    {
      testimonial:
        "Completed the MongoDB: Node.js Developer Path certification, gaining in-depth knowledge of using MongoDB with Node.js to manage and query data effectively in server-side applications.",
      name: "MongoDB",
      designation: "-",
      company: "September 2024",
      image: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    },
    {
      testimonial:
        "Kaggle: Computer Vision – Applied machine learning and deep learning techniques to solve image classification, object detection, and segmentation problems using libraries like OpenCV, TensorFlow, and PyTorch.",
      name: "Kaggle",
      designation: "-",
      company: "September 2024",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8gvv8Au/8Auf/D6v8KvP+Y2v9v0f+b3P/6/v/l9//v+v/p+P/y+/+t5P+X3f+15v/I7f/P7//Z8v8rwf9Qyf+m4f+K2f84xP9jzv961P+76f/d9P8lwP9Ix/+P2v/HpRUKAAAFGElEQVR4nO2d61LjMAxGGxdTeqdt2i2Flvd/y51dLrMLiT/HUiyJ0fnNMD64FVEky5OJ4ziO4ziO84PZ3XeymUsvjIvtNHYSjj9F8dr0EA7SS2Ni2mt4J700JtzQPm5oHze0jxvaxw3t44b2cUP7uKF93NA+bmgfN7SPG9rHDe3jhvZxQ/u4oX3c0D5uaB83tI8b2scN7eOG9nFD+7ihfdzQPm5oHze0jxvaxw3t44b2cUP7uKF93HAoy9Nl1s9lx7z8DJgNH5vQfXL6nWn908W8hqfQ9+veib/YDRCshlsk2ATbhnAHm3hdjuCQhtEwQ7BdjOGQhs8wR3A1ikMaNsMMwfN6HIc0XIZqBbkMN1jwJiPIZJgjKDUrhcUQCwoOg+EwzBB8kpt2w2D4qFqQwTBDcDaqAoBsqF2QbPiMBS8jKwCIhvoFiYYZgvXTpS+QDC0IkgzvsOBrBQUAwfAuQsFtDQVAuWHGDmoQLDfcYcFTHQVAqeEOf0Q3lRQAhYYZgo+1FABlhlgwPldTABQZ7nHCq0awyHCPP6IC9Yk+CgyxYNzXVAAMN8SCjSbB4YYHvIO6ptcONcwQfKmsABhoeEB+zVWZ4EBDvIOtNsFhhi/IL14FikuAIYZwB2NbvzwIGWAIv4PxLFE9Q+Qb4o/oWeEODjBc9E5v/xTUOac+1/AFCmodxJ9puAB+ksUlQJ7hyq5gniH8DoYnOQNEjuGiBf8IhWsvaTIMV6YFMwyXtgWxId5B6eISABliQfnaSxpguDYvCAyXZ/OCacMVFFRRe0mTMsQ7qKP2kqbfcDdHglMLggnDzQ3toJLiEqDXEBK1FJcAxYZBT+0lTalhVFR7SVNqaORLOKF8SlWVXxKUR5qrxleHHRBi6U167XmUG2rPCz8gGNp4aCMZqirX90IybBp9paZv0AzlTlHkQ9xDA9GGaNiEB2kDBNVQ/5lvsqH6aEM31Fo3/IBhD6PissyExVD5GzcOQ93RJs8Q9pMqjjY5hvEG+zCueqNNhmE8rmFnvuJogw3D32dPNBBCw+mYbqBhOL794Ay9H9b6dhEZfj5az8/oJ9V1Jb4BDP/JHRYooLY6o03a8L8K9jP4ayiNNslVf6l/vpqMNinDb09jTyjaaCzWJAy/J7frNm2orov9D/2GXe8KDwajTX+FtPNlKBoQEY+1BSBDz1tcULRR15wx1HAOa9/aos3gU0FL1LCv7dmm4GQXjDa6GtoLTuehkVDKok3JCcuZqWhTYgjTjKmmIn/ROeAFjDaKivxlZ7nhyA+R6XrdFJ7HR2mGomhTOlMBphlqeqNLDWGaoSbaFE/+gGmGliPr5dNb8Bw6HdGGMIEHpRlKWoooU5SOJqINxRCnGRpaikizvmCaoaGliDavDU6eVXB6nThzD6UZCqIN0RBXM8RbiqiTIVcw2kgX+cnTPWGaIR1t6BNaUZoh/WzDMGUXpRmxHVMAwmA4h9UM21N2Jxlphmi0qTPPW7KliGcmO0ozmij3bMM0Vx+lGYJlNyZDmGbIFfm5bn/AaYZUtKl3g4dUSxHfLSyoaUqqyM9nCNOMRqZdmvGuIJhmyEQbzvuecJoh0VLEemcXTDMkog3vvWsozWhC/WcbXkOYZjRt9RuDmG8HxNWM6tGG2TAjzaj9lrh3QaUJD6xm1E6HeyexhdJpwEegeGZdP2Y77bxWM0yLy9TzWUjd1BkazuXnsH/ohNKddjjd93OSf8/vOI7jOI7jjMdvycdIrEsJUe8AAAAASUVORK5CYII=",
    },
  ];
  
  const projects = [
    {
      name: "Craveit (Swiggy Clone)",
      description:
        "Developed a responsive web application replicating an online food delivery platform with features like restaurant browsing, cart management, user authentication, and a focus on UI design and usability.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/MothilalShiva/CraveIt-Swiggy-clone?tab=readme-ov-file",
    },
    {
      name: "Casino Game",
      description:
        "Built a basic casino game using JavaScript, HTML, and CSS that brings the excitement of a casino to the browser. Players can enjoy classic casino-style gameplay in a lightweight and user-friendly interface.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MothilalShiva/Casino-Repo",
    },
    {
      name: "Next G Sensor",
      description:
        "Created an AI-driven system using thermal image processing to automatically recognize student faces for attendance tracking, with integrated machine learning algorithms to enhance real-time accuracy and efficiency.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "ml",
          color: "green-text-gradient",
        },
        {
          name: "ai",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/MothilalShiva",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };