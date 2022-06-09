import FormSection from "./components/FormSection";

function App() {
  return (
    <div className="App">
      <form>
        <FormSection section-name="General Information"
                      fields={[{'label':'Name: ', 'id':'name', 'type': 'text'},
                                {'label':'Email: ', 'id':'email', 'type': 'email'},
                                {'label':'Phone number: ', 'id':'phone-number', 'type': 'number'}
                              ]}/>
        <FormSection section-name="Education"
                      fields={[{'label':'School: ', 'id':'school', 'type': 'text'},
                                {'label':'Title of study: ', 'id':'course', 'type': 'text'},
                                {'label':'Graduation Date: ', 'id':'graduation-date', 'type': 'date'}
                              ]}/>
        <FormSection section-name="Practical Experience"
                      fields={[{'label':'Previous company: ', 'id':'company', 'type': 'text'},
                                {'label':'Position: ', 'id':'position', 'type': 'text'},
                                {'label':'Job Description: ', 'id':'job-description', 'type': 'text'},
                                {'label':'Start Date: ', 'id':'job-start-date', 'type': 'date'},
                                {'label':'End Date: ', 'id':'job-end-date', 'type': 'date'}
                              ]}/>
      </form>
    </div>
  );
}

export default App;
