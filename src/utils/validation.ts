import { FormData, ValidationError } from '../types/script';

export const validateFormData = (formData: FormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Validate premise
  if (!formData.premise.trim()) {
    errors.push({
      field: 'premise',
      message: 'Premise is required'
    });
  } else if (formData.premise.length < 50) {
    errors.push({
      field: 'premise',
      message: 'Premise must be at least 50 characters'
    });
  }

  // Validate characters
  if (!formData.characters.trim()) {
    errors.push({
      field: 'characters',
      message: 'Characters description is required'
    });
  } else if (formData.characters.length < 50) {
    errors.push({
      field: 'characters',
      message: 'Characters description must be at least 50 characters'
    });
  }

  return errors;
};