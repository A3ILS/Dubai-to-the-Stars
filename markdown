# Dubai to the Stars - Technical Architecture

## Tech Stack
- **Frontend**: React 18 + Next.js 14 (App Router)
- **Backend**: Node.js 20 + Express.js
- **Database**: MongoDB Atlas (NoSQL)
- **AI**: OpenAI API (GPT-4 Turbo)
- **Real-time**: Socket.IO
- **Testing**: Jest + React Testing Library
- **Styling**: Tailwind CSS + Framer Motion
- **CI/CD**: GitHub Actions

## Core Components

### 1. Booking System (frontend/components/Booking)
```jsx
// Interactive Date & Destination Picker
import { Temporal } from '@js-temporal/polyfill';

const SpaceDatePicker = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(Temporal.Now.plainDateISO());

  const isLaunchWindow = (date) => {
    // Space launch window validation logic
    return date.month in [3, 4, 9, 10]; // Optimal launch months
  };

  return (
    <Calendar 
      minDate={Temporal.Now.plainDateISO()} 
      modifiers={{ available: isLaunchWindow }}
      onDayClick={(day) => {
        if(isLaunchWindow(day)) {
          setSelectedDate(day);
          onSelect(day);
        }
      }}
    />
  );
};
