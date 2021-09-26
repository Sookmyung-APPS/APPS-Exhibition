import React from "react";


const array = [
    {   id: 1,
        name: "CapturedMoment",
        project: "순간포착",
        value: "◼️ 팀명 : 순간포착\n\n🗺️ 작품 소개\n" +
        "지도를 기반으로한 출사지 추천 웹서비스이다. \n 다른 SNS와 달리 텍스트보다 사진 그리고 사진을 찍은 장소 정보를 공유하는 것을 중점으로 한다.\n"+
        "사용자는 특정한 장소나 마커를 선택하는 경우 위치와 관련된 게시물 등을 한꺼번에 조회 가능하다.\n"+
        "사용자는 장소 확인을 위한 시간과 노력을 줄일 수 있고, 사용자 주변의 유명한 스팟을 검색하거나 저장/관리할 수 있다.\n",
        printTitle: function(){
            return <div>{this.project}</div>;
        },
        printValue: function(){
            return <div>{this.value}</div>
        }
    },
    {
        id: 2,
        name: "DeliveryRun",
        project: "Delivery Run",
        value: "◼️ 팀명 : 배송불가지역\n\n🗺️ 작품 시나리오\n\n"+
        "어느날 가난한 주인공은 배달 일로 부자가 된 사람에 관한 뉴스를 보게 된다.\n '나도 저 사람처럼 부자가 될 수 있어!'라고 생각하며 배달일을 시작한다.\n"+
        "주인공은 배달을 하면서 얻은 돈으로 의상과 헤어스타일을 바꾸고 돈을 모아 부자가 되길 원한다.\n\n"+
        "🎮 게임 방법\nDeliveryRun은 안드로이드 모바일 게임으로 주인공이 장애물을 피하고 미션을 성공하면서 모은 코인으로 플레이어가 자신만의 캐릭터를 꾸밀 수 있는 커스터마이징 게임이다.",    
        printTitle: function(){
            return <div>{this.project}</div>;
        },
        printValue: function(){
            return <div>{this.value}</div>
        }
    },
    {
        id: 3,
        name: "일력",
        project: "일력(dia+lendar)",
        value: "◼️ 팀명 : 천생연분 (mbti가 천생연분…)\n\n🗺️ 작품 소개\n사진 한 장과 한 문장으로 작성하는 오늘의 일력. 소소한 하루를 모아 소중한 한 달을 채워보세요!",
        printTitle: function(){
            return <div>{this.project}</div>;
        },
        printValue: function(){
            return <div>{this.value}</div>
        }   
    },
    {
        id: 4,
        name: "LightAway",
        project: "LightAway",
        value: "◼️ 팀명 : LightingPotatoes \n\n🗺️ 작품 시나리오 \n"+
        "주인공은부모님과떨어져산속의오두막에서생활합니다.\n어렸을때부터 앓고있는 지병이있어 도시의 공기를 마실 수 없기 때문이죠.\n그때문에 주인공은 언제나 외로워합니다. \n\n"+
        "어느 날, 병문안을 온 주인공의 부모님은 외로워하는 주인공에게 소원을 들어주는 인형을 선물합니다.\n\n"+ 
        "“소원을 빌고, 양초를 끄면 인형이 네 소원을 들어줄거야.” \n그날 밤, 주인공은 간절하게 소원을 빕니다.\n"+
        "“아픈 나라도 뛰어다닐 수 있는 곳으로 가고싶어. 친구가가득한그곳으로가고싶어…!”\n\n 촛불이 연약한 숨결에 의해 꺼졌지만, 그 무엇도 변하지 않았습니다.\n"+
        "주인공은 여전히 오두막 안에서 홀로 있었습니다. 상심한 주인공은 인형을 끌어안고 잠을 청합니다.\n그리고 주인공이 다시 눈을 뜬 순간, 주인공은 어딘지 모를 곳에서 있었습니다.\n\n"+
        "🎮 게임 방법\n“모든 제단에 제물을 바칠지어라”\n“모든 제단의 촛불에 불을 밝힐지어라” \n\n인벤토리칸 변경 : Key 1,2\n줍기 : Key Q\n사용 및 떨구기 : Key E\n이동 : 방향키 및 WASD\n공격 : KeyG",
        printTitle: function(){
            return <div>{this.project}</div>;
        },
        printValue: function(){
            return <div>{this.value}</div>
        }
    },
    {
        id: 5,
        name: "SoundOfFaires",
        project: "Sound Of Fairies",
        value: "◼️ 팀명 : 아리송\n\n🗺️ 게임 시나리오\n"+
        "하늘에서 내리는 빗물에서 에너지를 얻으며 살아가는 빗물소리\n마을의 요정들은"+
        "최근 홍수와 산성비로 삶의 터전을 잃고 마을을 떠나게 됩니다.\n 마을의 정화대 대장이 된 당신만이"+
        "오염된 마을을 정화하고 떠났던 요정들을 돌아오게 할 수 있습니다.\n 마을이 원래의 모습을 되찾을 수 있도록 도와주세요!\n\n"+
        "🎮 게임 방법\n 물방울 노트가 떨어지면 타이밍에 맞게 하단의 선을 터치하는 2D 리듬게임입니다.\n"+
        "경험치를 쌓아 레벨을 올리면 요정이 돌아오고, 마을의 구역이 정화됩니다.",
        printTitle: function(){
            return <div>{this.project}</div>;
        }, 
        printValue: function(){
            return <div>{this.value}</div>
        }
    },
    {
        id: 6,
        name: "Comsongz",
        project: "소프트웨어학부 소개 홈페이지",
        value: "◼️ 팀명 : 컴송즈\n\n🗺️ 작품 소개\n컴퓨터과학전공과 소프트웨어융합전공을 한 눈에 볼 수 있는 소프트웨어학부 소개 페이지이다.\n"+
        "숙명여자대학교 소프트웨어학부의 화사하고 밝은 분위기를 시각적으로 표현하였으며, 보다 편리하게 학과에 대한 정보를 얻을 수 있다",
        printTitle: function(){
            return <div>{this.project}</div>;
        },    
        printValue: function(){
            return <div>{this.value}</div>
        }
    },
    {
        id: 7,
        name: "ALittleDruid",
        project: "A LITTLE DRUID \n-작은 마법사 : 잊혀진 기억을 찾아서",
        value: "◼️ 팀명: DARKEGG(어두워지는 게임 개발자) 팀\n◼️ 팀원: 김예진 심채영 장현애 황정현\n◼️ 제작 기간: 2020.03. ~ 2021.09.  \n\n"+
        "🗺️ 게임 시나리오 \n\n‘ 눈에 보이는 사실을 절대적인 진실이라고 할 수 있는가.’\n오래 전, 풍요로운 땅을 찾아 계속해서 " + 
        "여행하던 우리 일족은 이 땅에 터를 잡았다.\n 하지만 어느 날, 사악한 것들이 우리의 것을 빼앗아 땅을 망치기 시작했고,"+
        " 이윽고 우리의 터전은 가뭄이 들어 모든 것이 부족한 땅이 되었다.\n 저주받은 땅의 주민들은 다시금 땅의 풍요를 되찾고자,"+
        " 모든 일의 발단이 되는 사악한 생명체로 가득한 신전으로 용사를 보낸다.\n 하지만 오랜 기간 동안 그 누구도 마을로 돌아오지 못했고 당신은 마법사의 피를 잇는 마지막 용사이다.\n"+ 
        "부디 이번만은 그들에게 빼앗긴 것을 되찾아오길. 당신이 진실을 알아주길.\n\n"
        
        + "🎮 게임 컨셉\n\n"+
         
        "1. 플레이 컨셉\n* 탐색 및 수집형 RPG 게임\n* 층 별로 진행할 수록 플레이 난이도가 높아지는 신전이 배경\n* '원소석 얻기'라는 목표 달성을 위해 적을 물리치며 게임을 진행\n"+
        "* '기억의 조각' 아이템 수집을 통해 플레이어가 스토리에 관심을 갖도록 유도\n\n"+
        
        "2. 그래픽 컨셉\n* 2D pixel 기반의 그래픽\n* Top-down 뷰의 구성 방식\n\n"+
        
        "3. 사운드 컨셉\n* 신전 각 층의 보스가 상징하는 원소석의 분위기에 따라 동화풍으로 직접 제작\n\n"+
        "4. UI/UX 컨셉\n* 안드로이드에 적합하도록 필수적인 부분만 간단하게 표현\n\n"+
        "게임 특징\n\n◼️ 플레이에 따라 달라지는 스토리 정보 제공\n\n◼️ 다양한 캐릭터들과 특징을 가진 각 스테이지들\n\n"+
        "🚩 기획 의도\n\n이 게임은 다양한 올바른 역사 학습의 중요성과 단 하나의 정보로부터 판단하는 것의 위험성을 알리기 위해 제작되었다.\n"+
        "성인이 되어 기억하지 못하는 어린 시절의 추억들은 주변의 누군가가 남긴 기록으로, 말로 접한다.\n"+
        "우리는 이런 반추의 과정을 평생 반복한다. 하지만 누군가가 나의 기억하지 못할 정도로의 어린 시절이나, 탄생 이전보다도 더 오래된 기억을, 역사를 이야기한다면 어떨까? \n"+
        "또 역사를 여러 문헌이 아닌, 역사를 단 하나의 매체나 인물을 통해 집단적으로 학습된다면 우리는 역사의 진위 유무를 판단할 수 있을까? 우리는 보고 듣는 것을 단순한 진실로 판단하기보다 사실을 비판적으로 보아야할 필요가 있다.",
        printTitle: function(){
            return <div>{this.project}</div>;
        },    
        printValue: function(){
            return <div>{this.value}</div>
        }
    }
];

function ProjectIntro ( {name}) {

    const h3Style = {
        marginTop: "40px",
        marginBottom: "20px",
        marginLeft: "15px",
        color: "black",
        fontWeight: "bold",
    }

    const realName = name;
    const index = array.findIndex(i => i.name === realName);
    

    return (
        <div>
            <h3 style={h3Style}>{array[index].printTitle()}</h3>
            <div>
                {array[index].printValue()}
                {/* {array[index].value.split('\n').map((line) => {
                    return <div>{line}<br /></div>
                })} */}
            </div>
        </div>
    )
    
}

export default ProjectIntro;