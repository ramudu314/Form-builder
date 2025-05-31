import React from 'react';
import { FormProvider } from './hooks/useFormBuilder';
import FormBuilder from './components/FormBuilder/FormBuilder';

function App() {
  return (
    <FormProvider>
      <FormBuilder />
    </FormProvider>
  );
}

export default App;