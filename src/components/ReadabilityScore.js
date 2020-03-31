import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/readability.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import SchoolIcon from "@material-ui/icons/School";

export default function ReadabilityScore() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const value = useSelector(state => state.value);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    (async () => {
      
      let data;
      if (value["name"] === undefined) {
        data = {
          'body': value["orignal"],
          'type':'user'
        };
      } else {
        data = {
          'body': value["name"],
          'type':'database'
        };
      }

      try {
        const response = await fetch(`${SERVER_URL}/readability`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
        setResponse(result);
        setLoading(false);
      } catch (error) {
        console.log("%c Server Response Error ", "color:red");
      }
    })();
  }, [flag]);

  return (
    <div>
      <div className="container-fluid readability-block">
        <div className="center-block">
          <h1>Readability Score</h1>
          {loading ? <CircularProgress /> : <Readability response={response} />}
        </div>
      </div>
    </div>
  );
}
function Readability({ response }) {
  const scoreGrade = e => {
    if (isNaN(parseInt(e))) {
      return e;
    } else {
      let str = "";
      if (e <= 10) {
        str = `${e} grade student`;
      } else if (e <= 12) {
        str = "College Student";
      } else {
        str = "Post Graduate Student";
      }
      return str;
    }
  };

  const standardBlock = standard => {
    let standardName, standardImage;
    if (standard < 10) {
      standardName = "High School";
      standardImage = "HighSchool";
    } else if (standard < 12) {
      standardName = "11th 12th Students";
      standardImage = "CollegeStudent";
    } else if (standard < 16) {
      standardName = "College Student";
      standardImage = "CollegeStudent";
    } else {
      standardName = "College Graduate";
      standardImage = "CollegeGraduate";
    }

    let classNameVar = "standard-block-image " + standardImage;
    return (
      <>
        <div className="standard-block-text">
          Readable by:{" "}
          <div className="standard-block-text__info">{standardName}</div>
        </div>
        <div className={classNameVar}></div>
      </>
    );
  };

  return (
    <div>
      <div className="info-block">
        <div>
          Total words :
          <span className="info-count orange">{response["wordcount"]}</span>{" "}
        </div>
        <div>
          Time to read :{" "}
          <span className="info-count green">{response["time"]} 🕐</span>
        </div>
        <div>
          Difficult words :
          <span className="info-count purple">{response["difficulty"]}</span>
        </div>
      </div>

      <div className="standard-block">
        {standardBlock(response["standard"])}
      </div>

      <div className="score-block">
        <div className="score-text">
          {" "}
          Below are various Readability Scores used to rank readability of a
          Document
        </div>
        {response["score"].map(e => {
          console.log(e);
          return (
            <div className="score-element">
              <div className="score-name">{e[0]}</div>
              <span className="score-count">Score: {e[1]}</span>
              <span className="score-grade">
                Grade <SchoolIcon />: {scoreGrade(e[2])}
              </span>
            </div>
          );
        })}

        {/* <div className="temp-bar">
          <div className="temp-score-bar">

          </div>
        </div> */}
        <div className="info-on-scores">
          <div className="info-on-scores-text">Info on Readability Scores</div>
          <ol>
            <li>
              <b>Flesch Reading Ease</b>The formula will output a number from 0
              to 100 - a higher score indicates easier reading. An average
              document has a Flesch Reading Ease score between 6 - 70. As a rule
              of thumb, scores of 90-100 can be understood by an average 5th
              grader. 8th and 9th grade students can understand documents with a
              score of 60-70; and college graduates can understand documents
              with a score of 0-30.{" "}
            </li>
            <li>
              The <b>Flesch-Kincaid Grade Level</b> outputs a U.S. school grade
              level; this indicates the average student in that grade level can
              read the text. For example, a score of 7.4 indicates that the text
              is understood by an average student in 7th grade.{" "}
            </li>
            <li>
              The <b>Fog Scale (Gunning FOGFormula)</b> is similar to the Flesch
              scale in that it compares syllables and sentence lengths. A Fog
              score of 5 is readable, 10 is hard, 15 is difficult, and 20 is
              very difficult. Based on its name, 'Foggy' words are words that
              contain 3 or more syllables.
            </li>
            <li>
              The <b>SMOG Index outputs</b>a U.S. school grade level; this
              indicates the average student in that grade level can read the
              text. For example, a score of 7.4 indicates that the text is
              understood by an average student in 7th grade.
            </li>
            <li>
              The
              <b> Coleman-Liau</b> Index relies on characters instead of
              syllables per word and sentence length. This formula will output a
              grade. For example, 10.6 means your text is appropriate for a
              10-11th grade high school student.
            </li>
            <li>
              <b>Automated Readability Index </b>outputs a number which
              approximates the grade level needed to comprehend the text. For
              example, if the ARI outputs the number 3, it means students in 3rd
              grade (ages 8-9 yrs. old) should be able to comprehend the text.{" "}
            </li>
            <li>
              <b>Linsear Write Formula</b> is a readability formula for English
              text, originally developed for the United States Air Force to help
              them calculate the readability of their technical manuals. Linsear
              Write Formula is specifically designed to calculate the United
              States grade level of a text sample based on sentence length and
              the number words used that have three or more syllables.{" "}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
