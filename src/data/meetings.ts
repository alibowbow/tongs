export interface ScheduleItem {
  time: string;
  activity: string;
  place: string;
  note: string;
}

export interface Meeting {
  date: string;
  end_date?: string;
  quarter: string;
  host: string;
  status: string;
  area: string;
  schedule: ScheduleItem[];
}

export const meetings: Meeting[] = [
  {
    "date": "2020-01-12",
    "quarter": "Q0",
    "host": "김형곤",
    "status": "완료",
    "area": "울산",
    "schedule": [
      {
        "time": "13:00",
        "activity": "집결",
        "place": "자수정동굴 주차장",
        "note": "신년회 성격의 모임"
      },
      {
        "time": "",
        "activity": "자수정동굴 보트",
        "place": "자수정동굴",
        "note": ""
      },
      {
        "time": "",
        "activity": "저녁식사",
        "place": "소토나 또는 하누마을",
        "note": "최종 식당명 확인 필요"
      }
    ]
  },
  {
    "date": "2020-02-09",
    "quarter": "Q1",
    "host": "김민광",
    "status": "완료",
    "area": "부산/기장",
    "schedule": [
      {
        "time": "13:00",
        "activity": "모임 및 점심식사",
        "place": "밤나무집",
        "note": ""
      },
      {
        "time": "",
        "activity": "커피숍",
        "place": "",
        "note": ""
      },
      {
        "time": "",
        "activity": "산책",
        "place": "아홉산길/아홉산숲",
        "note": "약 1시간 30분"
      },
      {
        "time": "",
        "activity": "저녁식사",
        "place": "철마한우수목원",
        "note": ""
      }
    ]
  },
  {
    "date": "2020-04-05",
    "quarter": "Q2",
    "host": "강지혜",
    "status": "완료",
    "area": "부산 해운대",
    "schedule": [
      {
        "time": "12:00",
        "activity": "점심식사",
        "place": "강가 해운대점",
        "note": "부산 해운대구 해운대해변로 257 하버타운 3층"
      },
      {
        "time": "",
        "activity": "티타임",
        "place": "파크하야트 호텔",
        "note": ""
      },
      {
        "time": "",
        "activity": "산책",
        "place": "마린시티 / 동백섬 / 해운대해수욕장 일대",
        "note": ""
      },
      {
        "time": "17:00~17:30",
        "activity": "저녁식사",
        "place": "아넬로",
        "note": "부산 해운대구 마린시티3로 51 더샵해운대아델리스"
      }
    ]
  },
  {
    "date": "2020-09-01",
    "quarter": "Q3",
    "host": "김형곤",
    "status": "",
    "area": "",
    "schedule": []
  },
  {
    "date": "2020-12-05",
    "end_date": "2020-12-06",
    "quarter": "Q4",
    "host": "강준호",
    "status": "완료",
    "area": "부산",
    "schedule": [
      {
        "time": "14:30",
        "activity": "집결",
        "place": "장어집",
        "note": "식당명 확인 필요"
      },
      {
        "time": "",
        "activity": "장보기",
        "place": "롯데마트",
        "note": ""
      },
      {
        "time": "16:00",
        "activity": "숙소 체크인",
        "place": "부산 숙소",
        "note": "숙소명 확인 필요"
      },
      {
        "time": "",
        "activity": "놀이 및 숙박",
        "place": "숙소",
        "note": "화투/카드 등 준비 언급"
      }
    ]
  },
  {
    "date": "2021-03-21",
    "quarter": "Q1",
    "host": "김형곤",
    "status": "연기",
    "area": "김해",
    "schedule": [
      {
        "time": "12:00",
        "activity": "점심식사",
        "place": "우화한식당",
        "note": "최초 공지 일정"
      },
      {
        "time": "",
        "activity": "관광 및 티타임",
        "place": "김해낙동강레일파크",
        "note": ""
      },
      {
        "time": "",
        "activity": "저녁식사",
        "place": "콰이강의다리향어마을",
        "note": ""
      }
    ]
  },
  {
    "date": "2021-04-18",
    "quarter": "Q1",
    "host": "김형곤",
    "status": "취소",
    "area": "",
    "schedule": []
  },
  {
    "date": "2021-06-20",
    "quarter": "Q2",
    "host": "강지혜",
    "status": "보류",
    "area": "",
    "schedule": []
  },
  {
    "date": "2021-09-12",
    "quarter": "Q3",
    "host": "김민광",
    "status": "보류",
    "area": "",
    "schedule": []
  },
  {
    "date": "2022-03-13",
    "quarter": "Q1",
    "host": "강준호",
    "status": "완료",
    "area": "부산 문현동~서면",
    "schedule": [
      {
        "time": "12:30",
        "activity": "집결",
        "place": "BIFC(부산국제금융센터)",
        "note": "주말 주차 무료, 주차 후 도보 이동"
      },
      {
        "time": "",
        "activity": "점심식사",
        "place": "기토식당",
        "note": ""
      },
      {
        "time": "",
        "activity": "커피 & 디저트",
        "place": "보타닉아덴",
        "note": ""
      },
      {
        "time": "",
        "activity": "액티비티",
        "place": "캐니언파크",
        "note": ""
      },
      {
        "time": "",
        "activity": "액티비티",
        "place": "방구석코인노래방 또는 파이널나인",
        "note": "대화상 두 옵션 언급"
      },
      {
        "time": "",
        "activity": "저녁식사",
        "place": "한방장어구이",
        "note": ""
      }
    ]
  },
  {
    "date": "2022-06-12",
    "quarter": "Q2",
    "host": "김민광",
    "status": "완료",
    "area": "부산 태종대",
    "schedule": [
      {
        "time": "12:00",
        "activity": "모임 및 점심식사",
        "place": "태종대 짬뽕",
        "note": ""
      },
      {
        "time": "",
        "activity": "커피",
        "place": "",
        "note": ""
      },
      {
        "time": "",
        "activity": "요트 투어",
        "place": "태종대 일대",
        "note": ""
      },
      {
        "time": "",
        "activity": "관광",
        "place": "태종대",
        "note": ""
      },
      {
        "time": "",
        "activity": "저녁식사",
        "place": "회 또는 조개구이",
        "note": "최종 식당명 확인 필요"
      }
    ]
  },
  {
    "date": "2022-08-27",
    "end_date": "2022-08-28",
    "quarter": "Q3",
    "host": "김형곤",
    "status": "완료",
    "area": "경주",
    "schedule": [
      {
        "time": "13:30",
        "activity": "집결",
        "place": "양산 맥도날드",
        "note": "바로 경주로 오는 사람은 맥도날드 런치 지원"
      },
      {
        "time": "16:00",
        "activity": "장보기",
        "place": "경주 홈플러스",
        "note": "예상 시간"
      },
      {
        "time": "17:00",
        "activity": "숙소 체크인",
        "place": "경상북도 경주시 현곡면 오류리 46-5",
        "note": "숙소명 확인 필요"
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "감포일출복어",
        "note": "대기 길면 한우 메뉴로 변경 예정"
      },
      {
        "time": "",
        "activity": "관광",
        "place": "월지 동궁",
        "note": ""
      },
      {
        "time": "",
        "activity": "숙소 복귀 및 놀이",
        "place": "숙소",
        "note": "다과 포함"
      },
      {
        "time": "12:30",
        "activity": "점심식사",
        "place": "아리랑식당",
        "note": "둘째 날 예약 시간, 닭샤브샤브"
      },
      {
        "time": "",
        "activity": "카페",
        "place": "LLOW",
        "note": ""
      },
      {
        "time": "",
        "activity": "쇼핑",
        "place": "경주빵",
        "note": "회비 남으면"
      }
    ]
  },
  {
    "date": "2022-12-18",
    "quarter": "Q4",
    "host": "박대근",
    "status": "완료",
    "area": "울산 삼산동",
    "schedule": [
      {
        "time": "12:30",
        "activity": "점심식사",
        "place": "오사카멘치 삼산점",
        "note": ""
      },
      {
        "time": "13:30",
        "activity": "보드게임",
        "place": "홈즈앤루팡",
        "note": ""
      },
      {
        "time": "15:40",
        "activity": "팝콘/음료 구입",
        "place": "CGV 울산삼산",
        "note": ""
      },
      {
        "time": "16:05",
        "activity": "영화 관람",
        "place": "CGV 울산삼산",
        "note": "아바타: 물의 길 IMAX 3D"
      },
      {
        "time": "19:40",
        "activity": "저녁식사",
        "place": "노아 레스토랑",
        "note": ""
      },
      {
        "time": "20:40",
        "activity": "귀가",
        "place": "각자 귀가",
        "note": ""
      }
    ]
  },
  {
    "date": "2023-03-12",
    "quarter": "Q1",
    "host": "강지혜",
    "status": "완료",
    "area": "거제",
    "schedule": [
      {
        "time": "12:00",
        "activity": "집결",
        "place": "오션블루 거제휴게소",
        "note": ""
      },
      {
        "time": "12:30",
        "activity": "점심식사",
        "place": "막썰어횟집",
        "note": ""
      },
      {
        "time": "14:00",
        "activity": "카페",
        "place": "오송웨이브",
        "note": ""
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "공씨네복생고기",
        "note": ""
      }
    ]
  },
  {
    "date": "2023-05-14",
    "quarter": "Q2",
    "host": "강준호",
    "status": "완료",
    "area": "부산 경성대 일대",
    "schedule": [
      {
        "time": "12:30",
        "activity": "집결",
        "place": "경성대 정문",
        "note": "캠퍼스 내 주차"
      },
      {
        "time": "12:30~13:30",
        "activity": "점심식사",
        "place": "언양닭칼국수 경성대부경대점",
        "note": ""
      },
      {
        "time": "",
        "activity": "카페",
        "place": "",
        "note": "중간에 시간 빌 때 카페에서 담소"
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "유메",
        "note": "일식집"
      }
    ]
  },
  {
    "date": "2023-08-26",
    "end_date": "2023-08-27",
    "quarter": "Q3",
    "host": "김형곤",
    "status": "완료",
    "area": "배내골/양산",
    "schedule": [
      {
        "time": "13:30",
        "activity": "집결 및 식사",
        "place": "양산타워 맥도날드",
        "note": ""
      },
      {
        "time": "",
        "activity": "장보기",
        "place": "이마트 양산점",
        "note": ""
      },
      {
        "time": "15:00",
        "activity": "숙소 체크인",
        "place": "배내골 베컴펜션",
        "note": ""
      },
      {
        "time": "",
        "activity": "물놀이 및 저녁식사",
        "place": "배내골 계곡 / 숙소",
        "note": ""
      },
      {
        "time": "11:00",
        "activity": "액티비티",
        "place": "배내골 ATV 체험장",
        "note": ""
      },
      {
        "time": "",
        "activity": "카페",
        "place": "",
        "note": ""
      },
      {
        "time": "15:00",
        "activity": "영화 관람",
        "place": "",
        "note": "오펜하이머"
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "어드매",
        "note": ""
      }
    ]
  },
  {
    "date": "2023-11-12",
    "quarter": "Q4",
    "host": "박대근",
    "status": "완료",
    "area": "울산",
    "schedule": [
      {
        "time": "12:30",
        "activity": "점심식사",
        "place": "섬뜰",
        "note": ""
      },
      {
        "time": "13:30",
        "activity": "티타임",
        "place": "헬로커피 / 봄여름가을 / 슬도매력에빠지다 / 카페벼리",
        "note": "최종 선택지 확인 필요"
      },
      {
        "time": "14:30",
        "activity": "관광",
        "place": "슬도 / 울산대교전망대 / 대왕암",
        "note": "최종 선택지 확인 필요"
      },
      {
        "time": "15:30",
        "activity": "액티비티",
        "place": "정글비 / 오층만화방 / 성광볼링장",
        "note": "최종 선택지 확인 필요"
      },
      {
        "time": "19:00",
        "activity": "저녁식사",
        "place": "한그륵 / 미가네굴국밥",
        "note": "최종 선택지 확인 필요"
      }
    ]
  },
  {
    "date": "2024-03-17",
    "quarter": "Q1",
    "host": "강준호",
    "status": "완료",
    "area": "김해",
    "schedule": [
      {
        "time": "11:30",
        "activity": "결혼식 참석 및 점심식사",
        "place": "더파티웨딩홀",
        "note": "원경이 결혼식"
      },
      {
        "time": "13:30",
        "activity": "산책 및 꽃구경",
        "place": "연지공원",
        "note": "시간 없으면 국립김해박물관 또는 연지공원 중 일부 패스"
      },
      {
        "time": "13:30",
        "activity": "박물관",
        "place": "국립김해박물관",
        "note": "연지공원과 병행 또는 선택"
      },
      {
        "time": "15:00",
        "activity": "카페",
        "place": "스페이스뷰",
        "note": ""
      },
      {
        "time": "16:00",
        "activity": "체험",
        "place": "스카이비비",
        "note": "꿀벌체험장"
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "우화한식당 대동점",
        "note": ""
      }
    ]
  },
  {
    "date": "2024-05-19",
    "quarter": "Q2",
    "host": "김형곤",
    "status": "완료",
    "area": "부산",
    "schedule": [
      {
        "time": "12:30",
        "activity": "주차 및 집결",
        "place": "더비치 푸르지오 써밋",
        "note": "부산 남구 황령대로 504"
      },
      {
        "time": "13:00",
        "activity": "점심식사",
        "place": "스스키노",
        "note": ""
      },
      {
        "time": "",
        "activity": "레포츠",
        "place": "광안리해양레포츠센터",
        "note": "모터보트 예정, 다른 해양레포츠로 교체 가능"
      },
      {
        "time": "",
        "activity": "산책",
        "place": "해운대수목원",
        "note": ""
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "수연어 본점",
        "note": ""
      },
      {
        "time": "",
        "activity": "야경",
        "place": "용호별빛공원",
        "note": ""
      },
      {
        "time": "",
        "activity": "티타임",
        "place": "쏘리낫쏘리 베이크샵",
        "note": "마무리"
      }
    ]
  },
  {
    "date": "2024-08-25",
    "quarter": "Q3",
    "host": "강지혜",
    "status": "완료",
    "area": "거제",
    "schedule": [
      {
        "time": "13:00~13:50",
        "activity": "점심식사",
        "place": "박영수손짜장",
        "note": "거제 옥포, 주차는 옥포수변공원 근처"
      },
      {
        "time": "14:20~14:50",
        "activity": "카페",
        "place": "마소마레",
        "note": ""
      },
      {
        "time": "15:10~16:10",
        "activity": "케이블카",
        "place": "거제파노라마 케이블카",
        "note": ""
      },
      {
        "time": "16:30",
        "activity": "식물원 관람",
        "place": "거제식물원 정글돔",
        "note": ""
      },
      {
        "time": "17:30",
        "activity": "저녁식사",
        "place": "챠오벨라",
        "note": ""
      }
    ]
  },
  {
    "date": "2024-10-12",
    "end_date": "2024-10-13",
    "quarter": "Q4",
    "host": "박대근",
    "status": "완료",
    "area": "제주",
    "schedule": [
      {
        "time": "05:50",
        "activity": "공항 집결",
        "place": "김해공항 국내선 청사 에어부산 체크인 카운터",
        "note": ""
      },
      {
        "time": "",
        "activity": "제주 이동",
        "place": "김해공항 → 제주",
        "note": ""
      },
      {
        "time": "",
        "activity": "식사",
        "place": "색달식당",
        "note": "제주 서귀포시 예래로 255-18 1층"
      },
      {
        "time": "",
        "activity": "숙소 체크인",
        "place": "파우제419풀빌라",
        "note": ""
      },
      {
        "time": "11:00",
        "activity": "퇴실",
        "place": "숙소",
        "note": "둘째 날 퇴실 시간"
      }
    ]
  },
  {
    "date": "2025-03-23",
    "quarter": "Q1",
    "host": "강지혜",
    "status": "완료",
    "area": "거제 고현",
    "schedule": [
      {
        "time": "13:00",
        "activity": "모임 및 점심식사",
        "place": "디큐브백화점 1층 맥도날드",
        "note": "거제 고현"
      },
      {
        "time": "13:40",
        "activity": "카페",
        "place": "짹짹커피",
        "note": ""
      },
      {
        "time": "14:40",
        "activity": "영화 관람",
        "place": "거제 CGV",
        "note": "미키 17"
      },
      {
        "time": "17:20",
        "activity": "산책",
        "place": "고현천 다리 일대",
        "note": "동네 한바퀴"
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "압구정화로구이",
        "note": "소고기"
      },
      {
        "time": "19:00",
        "activity": "빵 구매 후 해산",
        "place": "블루일베이커리",
        "note": ""
      }
    ]
  },
  {
    "date": "2025-05-18",
    "quarter": "Q2",
    "host": "강준호",
    "status": "완료",
    "area": "사천",
    "schedule": [
      {
        "time": "12:30",
        "activity": "집결",
        "place": "사천시 사천읍 중선2길 33",
        "note": "1층 주차 후 한 차로 이동"
      },
      {
        "time": "12:30",
        "activity": "점심식사",
        "place": "사천 재건냉면",
        "note": ""
      },
      {
        "time": "13:00",
        "activity": "박물관 관람",
        "place": "우주항공박물관",
        "note": ""
      },
      {
        "time": "14:00",
        "activity": "카페",
        "place": "씨맨스 선상카페",
        "note": ""
      },
      {
        "time": "15:00",
        "activity": "산책 및 구경",
        "place": "아르떼리조트 / 사천케이블카 자연휴양림",
        "note": "케이블카 탑승 없음"
      },
      {
        "time": "17:30",
        "activity": "저녁식사",
        "place": "삼천포맛집 정서방",
        "note": ""
      },
      {
        "time": "18:30~19:00",
        "activity": "복귀 및 해산",
        "place": "사천읍",
        "note": ""
      }
    ]
  },
  {
    "date": "2025-08-23",
    "end_date": "2025-08-24",
    "quarter": "Q3",
    "host": "김형곤",
    "status": "완료",
    "area": "부산",
    "schedule": [
      {
        "time": "14:00",
        "activity": "집결",
        "place": "더비치푸르지오써밋",
        "note": ""
      },
      {
        "time": "",
        "activity": "점심식사",
        "place": "초원복국",
        "note": ""
      },
      {
        "time": "",
        "activity": "체크인",
        "place": "아파트 게스트하우스",
        "note": ""
      },
      {
        "time": "",
        "activity": "카페",
        "place": "",
        "note": "티타임"
      },
      {
        "time": "",
        "activity": "액티비티",
        "place": "광안리",
        "note": "선셋 패들보드 및 드론쇼"
      },
      {
        "time": "",
        "activity": "저녁식사",
        "place": "서군장작",
        "note": "치맥 겸 저녁"
      },
      {
        "time": "",
        "activity": "숙박",
        "place": "게스트하우스",
        "note": ""
      },
      {
        "time": "",
        "activity": "체크아웃",
        "place": "게스트하우스",
        "note": ""
      },
      {
        "time": "",
        "activity": "산책",
        "place": "이기대",
        "note": ""
      },
      {
        "time": "",
        "activity": "브런치",
        "place": "장어구이 식당",
        "note": "식당명 확인 필요"
      },
      {
        "time": "",
        "activity": "빵 구매 후 해산",
        "place": "",
        "note": ""
      }
    ]
  },
  {
    "date": "2025-11-30",
    "quarter": "Q4",
    "host": "박대근",
    "status": "완료",
    "area": "울산",
    "schedule": [
      {
        "time": "12:30",
        "activity": "집결 및 주차",
        "place": "팔레드상떼",
        "note": ""
      },
      {
        "time": "13:00",
        "activity": "점심식사",
        "place": "선농설렁탕",
        "note": ""
      },
      {
        "time": "14:00",
        "activity": "산책",
        "place": "태화강 국가정원",
        "note": ""
      },
      {
        "time": "15:00",
        "activity": "카페",
        "place": "근처 카페",
        "note": ""
      },
      {
        "time": "16:00",
        "activity": "액티비티",
        "place": "아지트 보드게임 또는 레벨업PC방",
        "note": ""
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "친절한 초장집",
        "note": ""
      }
    ]
  },
  {
    "date": "2026-03-29",
    "quarter": "Q1",
    "host": "강지혜",
    "status": "예정",
    "area": "거제",
    "schedule": [
      {
        "time": "12:00",
        "activity": "집결",
        "place": "거제시 계룡로9길 21-3 신원아침도시헤리티지 203동",
        "note": "주차 후 한 차로 이동"
      },
      {
        "time": "12:30",
        "activity": "점심식사",
        "place": "한꼬막두꼬막",
        "note": "경남 거제시 일운면 지세포로 122"
      },
      {
        "time": "",
        "activity": "카페",
        "place": "커피숍",
        "note": ""
      },
      {
        "time": "",
        "activity": "영화 관람",
        "place": "",
        "note": "프로젝트 헤일메리"
      },
      {
        "time": "",
        "activity": "볼링",
        "place": "고고락볼링장",
        "note": ""
      },
      {
        "time": "18:00",
        "activity": "저녁식사",
        "place": "고반식당 거제고현점",
        "note": "경남 거제시 거제중앙로31길 7 1층"
      },
      {
        "time": "",
        "activity": "빵 구매",
        "place": "메러디스 빅토리",
        "note": ""
      }
    ]
  }
];
