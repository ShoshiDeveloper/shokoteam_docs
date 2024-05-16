module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     fontFamily: {
       mplus: ["MPLUSounded1c"],
     },
     extend: {
       fontSize: {
         'st-h1': ['32px', '110%'],
         'st-h2': ['28px', '110%'],
         'st-t1': ['28px', '110%'],
         'st-t2': ['22px', '110%'],
         'st-b1': ['16px', '140%'],
         'st-b2': ['14px', '140%'],
         'st-c': ['12px', '140%']
       },
       spacing: {
         'st-1': '4px',
         'st-2': '8px',
         'st-3': '16px',
         'st-4': '24px',
         'st-5': '48px'
       },
       colors: {
        'st-grey': '#79819A',
        'st-grey-black': '#47516B',
        'st-content-brand': '#FF4848',
        'st-content-secondary': '#8B8B8D',
        'st-bg-secondary': '#252529',
        'st-bg-primary': '#18181B',
        'st-bg-tertiary': '#2F2F32',
       }
     },
   },
 }