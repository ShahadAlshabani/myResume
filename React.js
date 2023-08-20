const react = document.getElementById("root");

const element = <div>
    <header>
		<div  className="container">
			<div className="header-content">
				<h1>Shahad Alshabani</h1>
				<h2>Business Analyst</h2>
					<ul className="contact-info">
                        <li><i className="fas fa-map-marker-alt"></i> Saudi Arabia, Riyadh</li>
                        <li><i className="fas fa-envelope"></i><a href="mailto:smaalshabani@gmail.com">smaalshabani@gmail.com</a></li>
                        <li><i className="fas fa-phone"></i> +966-599-667560</li>
                        <li><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/shahad-alshabani/">linkedin.com/in/shahad-alshabani/</a></li>
                        <li><i className="fab fa-github"></i> <a href="https://github.com/shahadM121">github.com/shahadM121</a></li>
                    </ul>
			</div>
		</div>
	</header>

	<main>
		<div className="container">
			<section>
				<h2>About Me</h2>
                <p>A fresh graduate student and highly motivated and passionate individual capable of efficient time management and working under pressure in all environments. Searching for new opportunities to utilize my acquired skills to help the company and my future peers grow. I want my efforts to make a considerable difference to the company and help in its consequent success.
                </p>
            </section>
            <section>
				<h2>Education</h2>
				<ul className="education-list">
					<li className="education">
						<div className="education-time">
							<p className="education-date">Graduated June 2023</p>
						</div>
						<div className="education-content">
							<h3 className="education-title"> Bachelor of Information System
                                , Imam Muhammad ibn Saud Islamic University
                                </h3>
							<p className="GPA">GPA : 4.96/5</p>
						</div>
					</li>
				</ul>
			</section>
            <section>
          
				<h2>Courses & Certifications</h2>
				<ul className="certifications">
                        <li>Coop training at King Abdulaziz City for Science and Technology</li>
                        <li>Data Analysis (IBM)</li>
                        <li>Agile Fundamental: Including Scrum and Kanban (Udmey)</li>
                        <li>JavaScript – Basics to Advanced step by step (Udmey)</li>
				</ul>
			</section>
			
            <section>
				<h2>Projects </h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Alumni Application</td>
                        <td>A medical application that allows users to search for medicines by name or
                            barcode and compare them for alternatives and lowest prices.</td>
                    </tr>
                    <tr>
                        <td>Graduate Training Application</td>
                        <td>A single platform designed to facilitate the process for students who wish to train at training institutions.</td>
                    </tr>
                    
                    </table>
				
			</section>



            <section>
				<h2>Skills</h2>
				<ul className="skills-list">
					<li className="skill">
						HTML5	
					</li>
					<li className="skill">
                        Java
					</li>
					<li className="skill">
                        CSS
					</li>
					<li className="skill">
                        Python
					</li>
					<li className="skill">
						Data Analysis
					</li>
                    <li className="skill">
						Data Vis
					</li>
                    <li className="skill">
						BPR
					</li>
                    <li className="skill">
						Scrum
					</li>
				</ul>
			</section>

			
		</div>
	</main>

	<footer>
		<div className="container">
			<p>&copy; 2023 shahad-alshabani</p>
		</div>
	</footer>
</div>;

ReactDOM.render(element,react);