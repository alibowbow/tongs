import { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { meetings } from '../data/meetings';
import { MeetingCard } from './MeetingCard';

export function MeetingList() {
  const [selectedYear, setSelectedYear] = useState('전체보기');
  const [selectedQuarter, setSelectedQuarter] = useState('전체보기');
  const [showGold, setShowGold] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGold(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const sortedMeetings = useMemo(() => {
    return [...meetings].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const years = useMemo(() => {
    const y = new Set(meetings.map(m => m.date.substring(0, 4)));
    return ['전체보기', ...Array.from(y).sort((a, b) => b.localeCompare(a))];
  }, []);

  const quarters = ['전체보기', 'Q1', 'Q2', 'Q3', 'Q4'];

  const filteredMeetings = useMemo(() => {
    return sortedMeetings.filter(meeting => {
      const meetingYear = meeting.date.substring(0, 4);
      const matchesYear = selectedYear === '전체보기' || meetingYear === selectedYear;
      const matchesQuarter = selectedQuarter === '전체보기' || meeting.quarter.includes(selectedQuarter);
      
      return matchesYear && matchesQuarter;
    });
  }, [sortedMeetings, selectedYear, selectedQuarter]);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = days[today.getDay()];

  const titleText = "계모임 일정 기록소";

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 lg:p-16">
      <header className="mb-16 text-center pt-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-stone-200 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-medium text-stone-600 tracking-wide">
              오늘: {formattedDate} ({dayName})
            </span>
          </div>
        </div>

        <h1 className="relative inline-block font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-md cursor-default">
          <span className="text-[#B59434] transition-colors duration-1000">{titleText}</span>
          <span 
            className={`absolute inset-0 text-gold-luxury transition-opacity duration-1000 pointer-events-none ${showGold ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
          >
            {titleText}
          </span>
        </h1>
        
        <p className="text-stone-500 tracking-[0.2em] uppercase text-xs md:text-sm font-medium relative inline-block group cursor-default mt-2">
          The Archive of Our Gatherings
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#B59434] transition-all duration-500 group-hover:w-full"></span>
        </p>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12 space-y-6 w-full"
      >
        <div className="w-full overflow-x-auto hide-scrollbar pb-2">
          <div className="flex gap-2 md:gap-3 w-max mx-auto px-4">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-full text-sm tracking-widest transition-all duration-300 whitespace-nowrap ${
                  selectedYear === year
                    ? 'bg-[#4A5D4E] text-white shadow-md'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-[#4A5D4E] hover:text-[#4A5D4E]'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full overflow-x-auto hide-scrollbar pb-2">
          <div className="flex gap-2 md:gap-3 w-max mx-auto px-4">
            {quarters.map(q => (
              <button
                key={q}
                onClick={() => setSelectedQuarter(q)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-widest transition-all duration-300 whitespace-nowrap ${
                  selectedQuarter === q
                    ? 'bg-[#D97757] text-white shadow-sm'
                    : 'bg-white text-stone-500 border border-stone-200 hover:border-[#D97757] hover:text-[#D97757]'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        {filteredMeetings.length > 0 ? (
          filteredMeetings.map((meeting, index) => (
            <MeetingCard key={`${meeting.date}-${index}`} meeting={meeting} index={index} />
          ))
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 border border-stone-200 border-dashed rounded-3xl bg-white"
          >
            <p className="text-stone-400 font-serif text-xl italic">해당하는 기록이 없습니다.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
