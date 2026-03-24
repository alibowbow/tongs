import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Meeting } from '../data/meetings';

interface MeetingCardProps {
  meeting: Meeting;
  index: number;
}

export function MeetingCard({ meeting, index }: MeetingCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => setIsExpanded(!isExpanded);

  const statusColors: Record<string, string> = {
    '완료': 'text-[#4A5D4E] bg-[#4A5D4E]/10 border-[#4A5D4E]/20',
    '부분확정': 'text-blue-600 bg-blue-50 border-blue-200',
    '연기': 'text-[#D97757] bg-[#D97757]/10 border-[#D97757]/20',
    '취소': 'text-rose-600 bg-rose-50 border-rose-200',
    '보류': 'text-stone-500 bg-stone-100 border-stone-200',
  };

  const statusColor = statusColors[meeting.status] || 'text-stone-500 bg-stone-100 border-stone-200';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4), ease: "easeOut" }}
      className="bg-white border border-stone-200/80 rounded-[2rem] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-500"
    >
      <div 
        className="p-6 md:p-8 cursor-pointer relative"
        onClick={handleExpand}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-widest uppercase text-[#D97757] font-semibold">
                {meeting.date.substring(0, 4)} {meeting.quarter}
              </span>
              <span className="w-1 h-1 rounded-full bg-stone-300"></span>
              <span className={`text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${statusColor} font-medium`}>
                {meeting.status || '미정'}
              </span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-2">
              {meeting.area || '지역 미정'}
            </h3>
            
            <p className="text-stone-500 text-sm tracking-wide flex items-center gap-2">
              <span>{meeting.date}</span>
              {meeting.end_date && <span>— {meeting.end_date}</span>}
            </p>
          </div>

          <div className="flex items-center gap-6 md:gap-8 text-sm text-stone-500">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Host</span>
              <span className="text-stone-700 font-medium">{meeting.host}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Events</span>
              <span className="text-stone-700 font-medium">{meeting.schedule.length}</span>
            </div>
            <div className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isExpanded ? 'bg-stone-100 text-stone-800' : 'bg-white border border-stone-200 text-stone-400'}`}>
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="border-t border-stone-100 bg-[#FAFAFA]"
          >
            <div className="p-6 md:p-8">
              {meeting.schedule.length > 0 ? (
                <div className="space-y-8">
                  <div className="relative border-l-2 border-stone-200 ml-4 space-y-8 py-2">
                    {meeting.schedule.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="relative pl-8"
                      >
                        <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-white border-2 border-[#4A5D4E]"></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                          <h5 className="font-serif text-xl md:text-2xl text-stone-800 font-medium">{item.activity}</h5>
                          {item.time && (
                            <span className="text-xs font-mono text-[#D97757] tracking-wider flex items-center gap-1.5 bg-white px-2 py-1 rounded-md border border-stone-200 shadow-sm">
                              <Clock className="w-3.5 h-3.5" />
                              {item.time}
                            </span>
                          )}
                        </div>
                        
                        {item.place && (
                          <a 
                            href={`https://map.naver.com/v5/search/${encodeURIComponent(`${meeting.area} ${item.place}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-stone-500 mb-3 hover:text-[#4A5D4E] transition-colors group"
                          >
                            <MapPin className="w-4 h-4 text-stone-400 group-hover:text-[#4A5D4E] transition-colors" />
                            <span className="underline decoration-stone-300 underline-offset-4 group-hover:decoration-[#4A5D4E]">{item.place}</span>
                          </a>
                        )}
                        
                        {item.note && (
                          <p className="text-sm text-stone-600 leading-relaxed mt-3 bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                            {item.note}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-stone-400 font-light italic">
                  <p>상세 일정이 기록되지 않았습니다.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
