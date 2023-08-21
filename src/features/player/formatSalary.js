function formatSalary(salary) {
  const formattedSalary = (salary * 1000000).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedSalary.replace(/\.\d{2}$/, ''); // Remove the cents part
}

export default formatSalary;