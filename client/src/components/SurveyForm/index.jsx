/* eslint-disable react/prop-types */
function SurveyForm({onSignOut}) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Survey Form</h1>
          <p>This is a placeholder for the survey form. More content will be added here later.</p>
          <button onClick={onSignOut} style={{ marginTop: '20px' }}>Sign Out</button>
    </div>
  );
}

export default SurveyForm;
