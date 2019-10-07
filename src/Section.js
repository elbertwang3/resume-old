import React from "react";

const Section = props => {
  const { title, data, id } = props;
  console.log(data);
  console.log(Array.isArray(data));
  return (
    <div className="section" id={id}>
      <div className="section-title">{title}</div>
      <div className="section-body">
        {Array.isArray(data) ? (
          data.map((d, i) => (
            <div key={i} className="section-item">
              <div className="item-left">
                <div className="item-title">
                  {d.employer && <span className="employer">{d.employer}</span>}
                  {d.school && <span className="school">{d.school}</span>}
                  {d.title && <span className="title">{d.title}</span>}
                </div>
                {d.description &&
                  d.description.map((d, i) => (
                    <p className="copy" key={i}>
                      {d}
                    </p>
                  ))}
                {d.degrees &&
                  d.degrees.map((d, i) => (
                    <p className="copy" key={i}>
                      {d}
                    </p>
                  ))}
              </div>
              <div className="item-right">
                {d.date && <p className="date">{d.date}</p>}
                {d.location && <p className="location">{d.location}</p>}
              </div>
            </div>
          ))
        ) : (
          <div className="skills">
            {Object.keys(data).map(key => (
              <p class="copy">
                <span class="medium">{key}:</span> {data[key]}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
