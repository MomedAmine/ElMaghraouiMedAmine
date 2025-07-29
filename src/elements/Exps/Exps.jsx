import styles from "./Exps.module.css";
import Exp from "./Exp/Exp";

function Exps(params) {
  const intern1 = {
    role: "Software Engineering Intern",
    date: "Jul 2022-Sept 2022",
    company: "Capgemini Engineering",
    work: (
      <ul>
        <li>
          Developed a VBA-based Excel tool to extract structured data from DOCX
          files using Regular Expressions (RegEx)
        </li>
        <li>
          Implemented data cleaning and normalization processes to align outputs
          with standardized input formats
        </li>
        <li>
          Designed a MATLAB script to automatically generate complex Simulink
          diagrams based on pre-processed data
        </li>
        <li>
          Enabled automated simulation and feature applicability testing across
          multiple automotive projects
        </li>
      </ul>
    ),
  };
  const intern2 = {
    role: "AI/ML Engineering Intern",
    date: "Feb 2023–July 2023",
    company: "Capgemini Engineering",
    work: (
      <ul>
        <li>
          Analyzing clients needs and creating a Functional Specifications
          Document.
        </li>
        <li>
          Collecting and Processing of Images for YOLOv7 Model , and training on
          the dataset.
        </li>
        <li> Integrating the YOLOv7 Model in the Jetson Nano Module.</li>
        <li>
          Development of a Decision-Making System Based on the Model Results.
        </li>
        <li> Development of a Lane Keeping Assist System Prototype testing.</li>
      </ul>
    ),
  };
  const jobCap = {
    role: "Consultant",
    date: "Feb 2023–July 2023",
    company: "Capgemini Engineering",
    work: (
      <ul>
        <li>
          <b className={styles.upper}>Functional and Safety Designer</b>
          <ul>
            <li>
              Analyzing the functional impact of client level specification{" "}
            </li>
            <li>
              Drafting of functional, diagnostic and security requirements.
            </li>
            <li>Organizing and leading functional design workshops .</li>
            <li>
              Drafting and updating verification and validation documents.
            </li>
          </ul>
        </li>
        <li>
          <b className={styles.upper}>Automation Engineer</b>
          <ul>
            <li>
              Built user-friendly Python tools to automate internal processes
            </li>
            <li>Developed scripts for large-scale Excel data processing</li>
            <li>Ensured reliability through unit and functional testing</li>
            <li className={styles.trophy}>
              {/* <i class="fa-solid fa-trophy"></i> */}
              Awarded employee of the month for outstanding contribution
            </li>
          </ul>
        </li>
      </ul>
    ),
  };

  return (
    <div className={styles.expsContainer}>
      <div>
        <Exp
          role={intern1.role}
          date={intern1.date}
          company={intern1.company}
          work={intern1.work}
        />
      </div>
      <div>
        <Exp
          role={intern2.role}
          date={intern2.date}
          company={intern2.company}
          work={intern2.work}
        />
      </div>
      <div>
        <Exp
          role={jobCap.role}
          date={jobCap.date}
          company={jobCap.company}
          work={jobCap.work}
        />
      </div>
    </div>
  );
}
export default Exps;
