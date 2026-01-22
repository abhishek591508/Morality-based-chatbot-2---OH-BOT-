export const STORY_DATA = {
  story1: {
    id: 'story1',
    title: "The Four Learned Scholars",
    subtitle: "A Panchatantra Tale of Wisdom",
    thumbnail: "🧙‍♂️",
    description: "Four scholars discover the remains of a lion. Will wisdom prevail over arrogance?",
    scenes: {

      scene1: {
        id: 'scene1',
        narration: `Four Brahmin scholars were walking on a dusty road. They were talking excitedly about their future and all the wonderful things they would do with their knowledge.

        The first scholar said proudly, "We know scriptures and magic very well. There is nothing that we cannot do. We are the greatest scholars in the land!"

        The second scholar added, "Yes! Kings will invite us to their palaces and respect us for our knowledge. They will give us wealth and power."

        The third scholar said confidently, "Knowledge is the greatest power that exists in this world. With it, we can change the world and make people follow us."

        But you warned them gently. You said, "Knowledge is powerful, but wisdom is even more important than knowledge. Without wisdom, knowledge can cause great harm to the world and to ourselves."

        The first scholar laughed and ignored your words. He said "You always warn us about things," "Brave people get success! Why do you always hold us back?"`,
        question: "What will you say to them?",
        choices: [
          {
            id: 'A',
            text: "You're right! Let's use our knowledge fearlessly",
            preview: "You encourage their confidence.",
            moralImpact: { arrogance: 15, wisdom: -15, humility: -10, fairness: 5, duty: -10, responsibility: -15, riskAwareness: -15, honesty: 5, empathy: -5},
            nextScene: 'scene2a'
          },
          {
            id: 'B',
            text: "Boldness is good, but we must balance it with caution and responsibility.",
            preview: "You offer a measured perspective.",
            moralImpact: { wisdom: 15, humility: 10, arrogance: -5, honesty: 11, empathy: 15, fairness: 10, duty: 15, responsibility: 15, riskAwareness: 15 },
            nextScene: 'scene2b'
          },
          {
            id: 'C',
            text: "Knowledge is powerful, but only when used with wisdom.",
            preview: "You emphasize wisdom over raw power.",
            moralImpact: { wisdom: 20, responsibility: 15, humility: 15, honesty: 15, fairness: 15, duty: 15, riskAwareness: 15, arrogance: -15, empathy: 10 },
            nextScene: 'scene2c'
          },
          {
            id: 'D',
            text: "Say nothing and continue walking quietly behind them.",
            preview: "You remain silent and let them continue their conversation.",
            moralImpact: {wisdom:-10, responsibility:-20, arrogance: 0, fairness: -10, duty: -20, honesty: 0, empathy: -15, riskAwareness: -10},
            nextScene: 'scene2a'
          }
        ]
      },
      scene2a: {
        id: 'scene2a',
        narration: `As you walked deeper into the forest with them, you came across the bones of a powerful lion. The bones were huge and still had marks where the strong muscles used to be. The eyes of your three companions shone with excitement and greed.

        One of them said, "This is the perfect chance to show our incredible skills. We will bring this lion back to life and it will be the most amazing thing anyone has ever seen!"

        The second scholar said, "Just imagine how amazed and frightened everyone will be! Kings will hear about us across the whole kingdom!"
        
        The third scholar was already pulling out ancient books from his bag. A cold fear slowly passed through your body as you realized what they were planning to do.`,
        question: "What will you do about this dangerous plan?",
        choices: [
          {
            id: 'A',
            text: "This is an excellent opportunity! Let's show everyone.",
            preview: "You ignore your fears and support the dangerous plan.",
            moralImpact: {wisdom:-10, responsibility:-20, arrogance: 15, fairness: -10, honesty: 0, duty: -15, riskAwareness: -20, empathy: -15},
            nextScene: 'scene3a'
          },
          {
            id: 'B',
            text: "Wait, wait! This is extremely dangerous and wrong.",
            preview: "You strongly oppose this dangerous plan with clear concerns.",
            moralImpact: { wisdom: 15, responsibility: 20, honesty: 15, fairness: 10, duty: 20, riskAwareness: 20, arrogance: -15, empathy: 10 },
            nextScene: 'scene3b'
          },
          {
            id: 'C',
            text: "I need time to think about this carefully.",
            preview: "You ask for time to carefully think about the consequences.",
            moralImpact: { wisdom: 18, responsibility: 18, humility: 15, honesty: 15, fairness: 15, duty: 15, riskAwareness: 18, arrogance: -15, empathy: 12},
            nextScene: 'scene3b'
          },
          {
            id: 'D',
            text: "I don't want to be part of this. You people decide for yourselves.",
            preview: "You step back and avoid taking responsibility.",
            moralImpact: {wisdom:-10, responsibility:-25, arrogance: -5, fairness: -10, duty: -25, honesty: 5, empathy: -10, riskAwareness: 0},
            nextScene: 'scene3a'
          }
        ]
      },
      scene2b: {
        id: 'scene2b',
        narration: `As you walked deeper into the forest with the scholars, you came across the bones of a powerful lion. The massive skeleton lay on the ground, and the three scholars gathered around it with wonder in their eyes.

        One of them said excitedly, "Look at this amazing opportunity! We could use this to show people what we have learned! This would prove that our knowledge and power are real!"

        The second scholar added, "But we must be careful. If something goes wrong, we could hurt someone. We need to think about what could happen."
        
        You could see that your earlier words about balance and responsibility were already making them think more carefully about their choices.`,
        question: "What do you suggest to them now?",
        choices: [
          {
            id: 'A',
            text: "Let's proceed carefully and test our knowledge slowly.",
            preview: "You support a careful approach to the ritual.",
            moralImpact: {wisdom: 10, responsibility: 12, arrogance: 5, fairness: 10, honesty: 12, duty: 12, riskAwareness: 12, empathy: 8},
            nextScene: 'scene3c'
          },
          {
            id: 'B',
            text: "I still have deep concerns about bringing a wild animal back to life.",
            preview: "You continue to warn them about the real dangers.",
            moralImpact: { wisdom: 18, responsibility: 20, honesty: 16, fairness: 12, duty: 18, riskAwareness: 20, arrogance: -10, empathy: 15},
            nextScene: 'scene3d'
          },
          {
            id: 'C',
            text: "If you truly want to test your knowledge, let's find a safer way.",
            preview: "You suggest finding a safer alternative.",
            moralImpact: { wisdom: 20, responsibility: 18, humility: 15, honesty: 15, fairness: 15, duty: 18, riskAwareness: 18, arrogance: -15, empathy: 18},
            nextScene: 'scene3c'
          }
        ]
      },
      scene2c: {
        id: 'scene2c',
        narration: `As you all walked deeper into the forest, the thick trees blocked out much of the sunlight. It was quiet and peaceful. Then you came upon the large bones of a lion lying among the rocks and fallen leaves.

        The three scholars stared at the skeleton in amazement. Their minds were already working on the problem of bringing it back to life.

        One of them said, "With our knowledge, we could do this. But is it the right thing to do?" You could see that your words about wisdom had planted a seed of doubt in their minds.

        Another scholar said, "Yes, we should think about whether we should do this, not just whether we can do this. Those are two different questions."`,
        question: "What is your response to their thoughtful words?",
        choices: [
          {
            id: 'A',
            text: "I'm glad you are thinking about this carefully.",
            preview: "You praise their thoughtful consideration.",
            moralImpact: { wisdom: 20, responsibility: 20, humility: 15, honesty: 16, fairness: 15, duty: 18, riskAwareness: 18, arrogance: -18, empathy: 18},
            nextScene: 'scene3e'
          },
          {
            id: 'B',
            text: "That is good thinking, but I still have concerns. A lion is a wild and dangerous creature.",
            preview: "You support their caution while adding your concerns.",
            moralImpact: { wisdom: 18, responsibility: 18, honesty: 15, fairness: 12, duty: 16, riskAwareness: 20, arrogance: -15, empathy: 15},
            nextScene: 'scene3e'
          },
          {
            id: 'C',
            text: "Now you understand true wisdom.",
            preview: "You share a wise saying with them.",
            moralImpact: { wisdom: 22, responsibility: 18, humility: 18, honesty: 15, fairness: 15, duty: 18, riskAwareness: 18, arrogance: -20, empathy: 15},
            nextScene: 'scene3e'
          }
        ]
      },
      scene3a: {
        id: 'scene3a',
        narration: `The three scholars became even more confident after you supported them. They immediately began preparing the ritual without any more discussion or hesitation.

        The first scholar started chanting ancient verses in a loud voice, and the air around the bones began to feel strange and heavy. You could feel something powerful starting to move in the forest.

        The skeleton began to shake and the bones started moving together, connecting with each other. Flesh and fur started appearing on the bones like magic.

        One of the scholars turned to you and said, "See? We told you our knowledge was powerful! Nothing bad will happen. Just watch this amazing moment!"

        But your fear was growing stronger with every passing second. Something felt very wrong about what was happening.`,
        question: "What do you do as the lion takes shape before your eyes?",
        choices: [
          {
            id: 'A',
            text: "Help them with the ritual and complete the spell together with them.",
            preview: "You join them in finishing the ritual despite your fears.",
            moralImpact: {wisdom:-10, responsibility:-20, arrogance: 15, riskAwareness: -25, fairness: -10, honesty: 0, duty: -15, empathy: -20},
            nextScene: 'ending_death'
          },
          {
            id: 'B',
            text: "Quietly back away from the ritual and climb up into the tree.",
            preview: "You act to preserve your own life by moving away.",
            moralImpact: { wisdom: 12, responsibility: -20, humility: 5, honesty: 8, fairness: 10, duty: -20, riskAwareness: 20, arrogance: -5, empathy: -15 },
            nextScene: 'ending_survival'
          },
          {
            id: 'C',
            text: "Make one final desperate plea to stop them immediately.",
            preview: "You try one last time to make them stop the dangerous ritual.",
            moralImpact: { wisdom: 15, responsibility: 18, humility: 12, honesty: 15, fairness: 15, duty: 18, riskAwareness: 18, arrogance: -15, empathy: 20},
            nextScene: 'ending_conditional'
          },
          {
            id: 'D',
            text: "Stand frozen in fear and do nothing at all as the lion comes back to life.",
            preview: "Terror completely paralyzes you. You cannot move or speak or act.",
            moralImpact: {wisdom:-15, responsibility:-25, arrogance: -5, fairness: -15, duty: -25, honesty: 0, empathy: -25, riskAwareness: -10},
            nextScene: 'ending_death'
          }
        ]
      },
      scene3b: {
        id: 'scene3b',
        narration: `Your strong words made the scholars pause for a moment. They looked at each other, unsure what to do.

        The first scholar shook his head and said, "You are being too fearful and cautious. Brave people take risks and that is how they become great. Are you saying our knowledge is not strong enough?"

        The second scholar said, "I want to continue. I want to prove that we have real power and that our studies have not been a waste of time."

        But you could see that the third scholar seemed uncertain. There was doubt in his eyes. He was listening to your warning, but the pressure from his friends was very strong.

        The first scholar said, "If you are truly brave, you will help us. If you run away, you are just a coward who wastes time with warnings instead of taking action."`,
        question: "They call you a coward and a waster of time. How do you respond?",
        choices: [
          {
            id: 'A',
            text: "I'm not afraid, but I am being smart. Doing dangerous things without thinking is not bravery.",
            preview: "You stand firm in your beliefs despite their insults.",
            moralImpact: { wisdom: 18, responsibility: 20, humility: 18, honesty: 18, fairness: 15, duty: 20, riskAwareness: 20, arrogance: -15, empathy: 15},
            nextScene: 'scene4a'
          },
          {
            id: 'B',
            text: "I will help you to show you that I am not a coward.",
            preview: "You give in to peer pressure and pride. You agree to help.",
            moralImpact: {wisdom:-15, responsibility:-20, arrogance: 18, riskAwareness: -25, fairness: -10, honesty: 5, duty: -15, empathy: -20},
            nextScene: 'scene4a'
          },
          {
            id: 'C',
            text: "You can think whatever you want about me. I refuse to participate in this madness.",
            preview: "You reject their mockery and prioritize your own survival.",
            moralImpact: { wisdom: 15, responsibility: -15, humility: -8, honesty: 10, fairness: 5, duty: -15, riskAwareness: 18, arrogance: 8, empathy: -15 },
            nextScene: 'scene4a'
          },
          {
            id: 'D',
            text: "Say nothing and stand on the ground watching them.",
            preview: "You neither speak nor act. You are paralyzed by confusion.",
            moralImpact: {wisdom:-12, responsibility:-22, arrogance: 10, honesty: 0, fairness: -12, duty: -22, riskAwareness: -5, empathy: -18},
            nextScene: 'scene4a'
          }
        ]
      },
      scene3c: {
        id: 'scene3c',
        narration: `The scholars considered your words about taking things slowly and carefully. The first scholar said, "Yes, this makes sense. We should be smart about this and not rush into things without thinking."

        The second scholar added, "If we do this step by step, we can stop at any moment if something goes wrong. That is a much better idea."

        They began to gather special herbs and stones to prepare the ritual. You could see that they were taking more time to think about what they were doing, and they were asking questions about each step.

        As they worked, they discussed what might go wrong and how they would handle problems. Your advice had made them much more careful and thoughtful than they would have been before.

        But then the first scholar said, "Once we start this ritual, we will not be able to stop it easily. Once the power begins, it will continue until it is done. Are we really ready for that?"`,
        question: "What do you say to them now as they realize the seriousness",
        choices: [
          {
            id: 'A',
            text: "Since you understand the risk, I think we should not do this at all.",
            preview: "You advise them to cancel the dangerous plan entirely.",
            moralImpact: { wisdom: 20, responsibility: 22, honesty: 16, fairness: 12, duty: 20, riskAwareness: 22, arrogance: -18, empathy: 18},
            nextScene: 'scene5a'
          },
          {
            id: 'B',
            text: "If you are going to do this, then we must have a plan to control the lion.",
            preview: "You help them prepare to manage the consequences of the ritual.",
            moralImpact: { wisdom: 16, responsibility: 18, honesty: 14, fairness: 12, duty: 16, riskAwareness: 16, arrogance: -12, empathy: 14},
            nextScene: 'scene4b'
          },
          {
            id: 'C',
            text: "Now that you understand the power, the choice is yours.",
            preview: "You let them choose while removing yourself from the situation.",
            moralImpact: { wisdom: 14, responsibility: -8, humility: 12, honesty: 14, fairness: 14, duty: -8, riskAwareness: 14, arrogance: -8, empathy: 10},
            nextScene: 'scene4b'
          }
        ]
      },
      scene3d: {
        id: 'scene3d',
        narration: `Your words of warning touched something in the scholars' hearts. They could see that you truly cared about what might happen, and you were not just being fearful or doubtful of their abilities.

        The first scholar sat down on a rock and said slowly, "You are right. We have been thinking only about proving our power. We have not been thinking about the danger we could create."

        The second scholar added, "A lion is not a pet. It is a wild creature with its own power and nature. Even if we bring it back to life, we cannot make it gentle or safe just because we made it."

        The third scholar said, "I think our friend has shown us real wisdom. Knowledge and power are not the same as understanding and care for others."

        But the first scholar was still not completely convinced. He said, "But what if we could do it safely? What if we could prove that knowledge has limits that we can control?"`,
        question: "How do you respond to the first scholar",
        choices: [
          {
            id: 'A',
            text: "Some things are too dangerous to even try.",
            preview: "You firmly advise them to abandon the plan completely.",
            moralImpact: { wisdom: 22, responsibility: 22, honesty: 18, fairness: 15, duty: 22, riskAwareness: 22, arrogance: -20, empathy: 20},
            nextScene: 'ending_wisdom'
          },
          {
            id: 'B',
            text: "I understand your hope, but I cannot agree.",
            preview: "You make an emotional and personal appeal to them.",
            moralImpact: { wisdom: 20, responsibility: 20, humility: 16, honesty: 17, fairness: 14, duty: 20, riskAwareness: 20, arrogance: -18, empathy: 22},
            nextScene: 'ending_wisdom'
          },
          {
            id: 'C',
            text: "You can try if you want, but I will not stay to watch this happen.",
            preview: "You decide to remove yourself and let them choose their own fate.",
            moralImpact: { wisdom: 16, responsibility: -12, humility: 10, honesty: 12, fairness: 10, duty: -12, riskAwareness: 18, arrogance: 5, empathy: -12},
            nextScene: 'ending_conditional'
          }
        ]
      },
      scene3e: {
        id: 'scene3e',
        narration: `Your wise words struck deeply into the hearts of all three scholars. They stood around the lion's bones in silence, thinking about what you had said.

        The first scholar said with respect in his voice, "You are right. Just because we have knowledge does not mean we should use it for everything. Wisdom means knowing when not to use our power."

        The second scholar said, "I feel shame now that I wanted to bring this lion back to life just to show off to others. That was not the real purpose of learning."

        The third scholar nodded slowly and said, "Our friend has taught us something more valuable than any ritual or magic spell. We have learned that knowledge without wisdom is not knowledge at all. It is just power without purpose."

        The first scholar turned to you and said, "What should we do now? We understand now that bringing the lion back would be wrong, but what is the right thing to do?"`,
        question: "What will you suggest",
        choices: [
          {
            id: 'A',
            text: "Let us respect this creature that once lived.",
            preview: "You suggest a respectful and meaningful alternative.",
            moralImpact: { wisdom: 22, responsibility: 22, humility: 18, honesty: 18, fairness: 18, duty: 22, riskAwareness: 20, arrogance: -22, empathy: 22},
            nextScene: 'ending_wisdom'
          },
          {
            id: 'B',
            text: "Now you understand the true purpose of your knowledge. ",
            preview: "You redirect their knowledge toward helping others.",
            moralImpact: { wisdom: 24, responsibility: 24, humility: 20, honesty: 18, fairness: 20, duty: 24, riskAwareness: 18, arrogance: -24, empathy: 24},
            nextScene: 'ending_wisdom'
          },
          {
            id: 'C',
            text: "I am truly proud of you for learning this lesson. Wisdom is the greatest knowledge, and you have found it. Let us leave this place together and remember this moment always.",
            preview: "You praise their growth and learning.",
            moralImpact: { wisdom: 20, responsibility: 20, humility: 22, honesty: 18, fairness: 16, duty: 20, riskAwareness: 18, arrogance: -20, empathy: 24},
            nextScene: 'ending_wisdom'
          }
        ]
      },
      scene4a: {
        id: 'scene4a',
        narration: `The three scholars began the ritual in earnest now. The air around the lion's bones became thick and heavy with power. The bones started to glow with a strange light, and the flesh grew on them quickly.

        The ritual was nearly complete now. The lion's skeleton was covered with muscles and fur. Its eyes were beginning to open slowly.

        This was the moment of greatest danger. Once the lion fully came back to life, there would be no stopping it. This was your final chance to do something to prevent disaster.

        The first scholar raised his hands dramatically and said in a loud voice, "And now, the lion is taking its first breath of life! Our knowledge is complete and our power is proven!"

        The lion's chest moved up and down. Its eyes opened wide and looked around at the scholars with ancient hunger and wild anger in them.`,
        question: "This is your final moment. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Climb the tree immediately.",
            preview: "You act decisively to preserve your own life.",
            moralImpact: { wisdom: 14, responsibility: -18, humility: 5, honesty: 8, fairness: 12, duty: -18, riskAwareness: 20, arrogance: -5, empathy: -18 },
            nextScene: 'ending_survival'
          },
          {
            id: 'B',
            text: "Make one final desperate cry out to warn the scholars.",
            preview: "You make one last attempt to save them all.",
            moralImpact: { wisdom: 16, responsibility: 20, humility: 16, honesty: 16, fairness: 16, duty: 20, riskAwareness: 18, arrogance: -15, empathy: 22},
            nextScene: 'ending_conditional'
          },
          {
            id: 'C',
            text: "Join them in the spell and try to control the lion.",
            preview: "You abandon safety and try to help at the final moment.",
            moralImpact: {wisdom:-12, responsibility:-18, arrogance: 15, riskAwareness: -22, fairness: -10, honesty: 5, duty: -15, empathy: -18},
            nextScene: 'ending_death'
          },
          {
            id: 'D',
            text: "Freeze in complete fear and terror.",
            preview: "Terror and shock completely paralyze you.",
            moralImpact: {wisdom:-15, responsibility:-22, arrogance: -5, fairness: -15, duty: -22, honesty: 0, empathy: -20, riskAwareness: -15},
            nextScene: 'ending_death'
          }
        ]
      },
      scene4b: {
        id: 'scene4b',
        narration: `The scholars listened to your practical advice about managing what they would create. They began to think seriously about what would happen after the lion came back to life.

        The first scholar said, "We could build a strong cage to keep it contained. We could prepare food and space for it to live."

        The second scholar added, "But keeping a wild lion contained is not the same as controlling it. We would need to feed it and care for it every day for the rest of our lives."

        The third scholar said thoughtfully, "And what if people found out about it? What if it escaped? What responsibility would we have then?"

        As they discussed these practical problems, the reality of what they were planning became clearer and heavier. The enthusiasm they had before was slowly turning into doubt and concern.

        The first scholar looked at you and said, "When you help us think about the real consequences, the whole plan seems much more complicated and difficult than we thought. Maybe we have not thought this through at all."`,
        question: "As their doubt grows, what do you say to them?",
        choices: [
          {
            id: 'A',
            text: "I think this doubt you are feeling is wisdom.",
            preview: "You encourage them to trust their growing doubts.",
            moralImpact: { wisdom: 22, responsibility: 22, honesty: 18, fairness: 14, duty: 22, riskAwareness: 22, arrogance: -20, empathy: 20},
            nextScene: 'ending_wisdom'
          },
          {
            id: 'B',
            text: "If you proceed despite these concerns, you will have to accept complete responsibility of it.",
            preview: "You make them face the weight of true responsibility.",
            moralImpact: { wisdom: 20, responsibility: 24, honesty: 18, fairness: 16, duty: 20, riskAwareness: 20, arrogance: -18, empathy: 18},
            nextScene: 'ending_conditional'
          },
          {
            id: 'C',
            text: "The choice is still yours to make.",
            preview: "You respect their choice while distancing yourself from it.",
            moralImpact: { wisdom: 16, responsibility: -10, humility: 14, honesty: 16, fairness: 14, duty: -10, riskAwareness: 16, arrogance: -8, empathy: 14},
            nextScene: 'scene5b'
          }
        ]
      },
      //----

      scene5a: {
        id: 'scene5a',
        narration: `After much discussion, the three scholars finally agreed with your strong advice. The first scholar said, 
        "You have shown us that wisdom is more important than proving our power. We were willing to create terrible danger just to show that our knowledge was real."
        The second scholar added with sadness, "Think of all the people who could have been hurt if we had gone ahead with this plan. A wild lion loose in the world would kill and destroy."
        The third scholar said, "We are grateful that our friend was brave enough to keep warning us, even when we mocked him and called him a coward."
        Together, all four of you collected the bones of the lion and gave them a respectful burial under some trees. You said prayers for the creature that once lived.
        The first scholar said to you, "We came here thinking we would prove how great we were. Instead, we learned that true greatness comes from knowing when not to use our power. This lesson is worth more than any magic spell."
        The scholars returned to their village completely changed. They used their knowledge to heal the sick and help the poor. They became wise teachers instead of arrogant scholars.`,
        question: "What is the final lesson from this story?",
        choices: [
          {
            id: 'A',
            text: "Knowledge without wisdom is dangerous.",
            preview: "You reflect on the most important lesson learned.",
            moralImpact: { wisdom: 25, responsibility: 25, honesty: 20, fairness: 20, duty: 25, riskAwareness: 25, arrogance: -25, empathy: 25},
            nextScene: 'ending_survival'
          },
          {
            id: 'B',
            text: "The world needs people who have the courage to say no.",
            preview: "You reflect on the personal courage required.",
            moralImpact: { wisdom: 24, responsibility: 24, humility: 22, honesty: 22, fairness: 18, duty: 24, riskAwareness: 22, arrogance: -24, empathy: 24},
            nextScene: 'ending_survival'
          },
          {
            id: 'C',
            text: "The most important lesson is that friendship means telling people the truth.",
            preview: "You emphasize the value of true friendship.",
            moralImpact: { wisdom: 24, responsibility: 24, humility: 20, honesty: 24, fairness: 20, duty: 24, riskAwareness: 20, arrogance: -22, empathy: 26},
            nextScene: 'ending_survival'
          }
        ]
      },
      scene5b: {
        id: 'scene5b',
        narration: `The three scholars looked at each other after you spoke those words. They could see that you were serious and that you would not be responsible for what they chose to do.

        For a long time, no one spoke. The weight of the decision pressed down on them heavily. Finally, the first scholar stood up slowly.

        He said, "Our friend has warned us many times. He has shown us wisdom when we wanted only pride. He has tried to save us from ourselves. And now he is saying that he cannot share the responsibility for what we do."

        The second scholar added quietly, "That means that we alone will bear all the consequences if something goes wrong. We cannot blame anyone else. We cannot say that someone else told us to do this."

        The third scholar said with a trembling voice, "When I think about it that way, I realize I do not have the courage to take that responsibility alone. I do not want to be responsible for hurting innocent people."

        But the first scholar was still stubborn. He said, "I will do this ritual alone if I must. I will prove that our knowledge is real, no matter what anyone says."

        The second and third scholars looked at him with sadness. They turned away from him and said they would not participate in this mad plan.

        The first scholar began the ritual alone, chanting the ancient words with great force and power. His two companions and you stood back and watched in fear and sadness.`,
        question: "The first scholar is completing the ritual alone. What do you do?",
        choices: [
          {
            id: 'A',
            text: "Climb the tree immediately with the other scholars.",
            preview: "You save yourself while the first scholar faces his fate alone.",
            moralImpact: { wisdom: 12, responsibility: -15, humility: 8, honesty: 10, fairness: 8, duty: -15, riskAwareness: 20, arrogance: 0, empathy: -15},
            nextScene: 'ending_survival'
          },
          {
            id: 'B',
            text: "Make one last urgent appeal to the first scholar to stop.",
            preview: "You try one final time to save your friend from himself.",
            moralImpact: { wisdom: 18, responsibility: 22, humility: 16, honesty: 18, fairness: 16, duty: 22, riskAwareness: 18, arrogance: -15, empathy: 24},
            nextScene: 'ending_wisdom'
          },
          {
            id: 'C',
            text: "Stand with the other scholars and watch what happens.",
            preview: "You witness the result of his stubborn pride.",
            moralImpact: { wisdom: 14, responsibility: -8, humility: 12, honesty: 12, fairness: 12, duty: -8, riskAwareness: 14, arrogance: 0, empathy: -10},
            nextScene: 'ending_death'
          },
          {
            id: 'D',
            text: "Try to physically stop him by grabbing his hands.",
            preview: "You attempt a physical intervention to stop him.",
            moralImpact: { wisdom: 16, responsibility: 24, humility: 14, honesty: 14, fairness: 14, duty: 24, riskAwareness: 16, arrogance: -12, empathy: 26},
            nextScene: 'ending_death'
          }
        ]
      },

      //-----
      ending_wisdom: {
        id: 'ending_wisdom',
        narration: `Years passed after that day in the forest. The three scholars became famous throughout the kingdom, but not for their magical powers or their knowledge of ancient spells.
        They became famous because they used their learning to help people who were suffering. They opened schools to teach wisdom to young people. They healed the sick with their knowledge. They advised kings with their wisdom.
        People would come from far away to learn from them because they had learned that true power comes from wisdom and compassion, not from showing off their abilities.
        The day in the forest when they almost created a terrible disaster became the turning point in their lives. That moment of choosing wisdom over pride changed them forever.
        You had been brave enough to stand alone against their arrogance. You had cared enough about them to keep warning them, even when they mocked you. Because of your courage and wisdom, three lives were saved, and many more were helped by the good work those scholars did.
        This is the story of how wisdom is greater than knowledge, and how caring for others is more powerful than any magic spell or ritual.`,
        isEnding: true,
        endingType: 'survival'
      },

      ending_survival: {
        id: 'ending_survival',
        narration: `You quickly climbed the tall tree, your hands scraping against the rough bark. Below, 
                  the final spell was cast. The lion's eyes snapped open, and it let out a deafening roar.
                   Horror replaced the scholars' excitement as the beast sprang to life. 
                   "By the gods…" whispered the first scholar, his voice trembling. 
                   Before they could react, the lion pounced. 
                   Their terrified screams echoed through the forest before falling silent. From your perch, you watched in deep sorrow.
                    Tears streamed down your face as you witnessed the terrible cost of their arrogance. After the lion departed,
                     you descended slowly and cast a final glance at your fallen friends. 
                     "Knowledge without wisdom is a sword without a hilt—deadly to the one who wields it," you murmured,
                      walking away with a lesson learned at a terrible price.`,
        isEnding: true,
        endingType: 'survival'
      },
      ending_death: {
        id: 'ending_death',
        narration: `The final spell was cast, and the lion's eyes blazed with life. It rose with a thunderous roar, 
                its predatory instincts immediately taking over. You stood frozen with your companions, realizing too late the magnitude of your mistake. 
                "What have we done?" someone whispered. The lion's gaze fixed on you all—easy prey. Your screams joined those of your friends as the beast attacked. 
                In your final moments, you understood the truth you had ignored: knowledge without wisdom leads not to glory, but to destruction. 
                The forest fell silent once more, claiming four more victims of arrogance.`,
        isEnding: true,
        endingType: 'death'
      },
      ending_conditional: {
        id: 'ending_conditional',
        narration: `"STOP! I BEG YOU!" you cried out. "Our knowledge was meant to serve life, not to play with death! 
                    Is proving our power worth our lives?" Your words rang through the clearing. The third scholar's hands trembled,
                     the spell incomplete. For a moment, time seemed to stop. Then, slowly, he lowered his hands. "Perhaps... perhaps you are right," 
                     he said quietly. The others looked ashamed. The assembled lion remained lifeless—a reminder of what could have been.
                      You all stood in silence, then quietly left the forest together, humbled and alive.
                       On the journey home, the first scholar spoke: "Today, you saved us all. Forgive our arrogance." You nodded.
                        "Knowledge without wisdom is dangerous. But wisdom can still guide us—if we let it." The four of you walked on,
                         forever changed by what you almost unleashed.`,
        isEnding: true,
        endingType: 'prevention'
      }
    }
  },

  

  // ============================================
  // STORY 2: The Fiddler's Lesson
  // ============================================
  story2: {
    id: 'story2',
    title: "The Fiddler's Lesson",
    subtitle: "A Story About Tricks and What Happens Next",
    thumbnail: "🎻",
    description: "A traveling musician uses tricks on forest animals, but will there be a price to pay for his cleverness?",
    scenes: {
      scene1: {
        id: 'scene1',
        narration: `You are a traveling fiddler, walking through a quiet forest with your violin on your back. You're feeling lonely, so you decide to play a happy tune,
                           hoping it might bring someone to you. Soon enough, a wolf comes running out from behind the trees, clearly loving your music.
                            "That was so beautiful!" the wolf says with excitement. "Will you teach me to play like you do?"`,
        question: "The wolf is asking you to teach it music. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Agree to teach, but trick the wolf by tying it to a tree.",
            preview: "You see a chance to play a mean trick on the wolf. You'll trap it and laugh at how helpless it becomes.",
            moralImpact: { honesty: -15, empathy: -15, fairness: -12, arrogance: 12, responsibility: -10, riskAwareness: -8, wisdom: -10, humility: -12, duty: -8 },
            nextScene: 'scene2_tricked_wolf'
          },
          {
            id: 'B',
            text: "Politely decline and explain you can't teach animals.",
            preview: "You decide to be honest with the wolf and tell it the truth. It looks disappointed but understands, then walks away peacefully.",
            moralImpact: { honesty: 15, empathy: 10, responsibility: 8, wisdom: 10, humility: 8, fairness: 5, duty: 5, riskAwareness: 5 },
            nextScene: 'scene2_honest'
          },
          {
            id: 'C',
            text: "Teach the wolf a simple tune with genuine kindness.",
            preview: "You show kindness and patience to the wolf, doing your best to help it learn despite how difficult it might be.",
            moralImpact: { empathy: 15, fairness: 15, humility: 12, honesty: 10, responsibility: 10, duty: 8, wisdom: 8, riskAwareness: 5 },
            nextScene: 'scene2_kind'
          },
          {
            id: 'D',
            text: "Ignore the wolf and walk away without responding.",
            preview: "You don't even answer the wolf's question. You're not being mean, but you're not being kind either, just indifferent.",
            moralImpact: { empathy: -10, responsibility: -8, duty: -8, fairness: -5, wisdom: -5, humility: -5 },
            nextScene: 'scene2_ignored'
          }
        ]
      },

      // Path: Tricked the wolf
      scene2_tricked_wolf: {
        id: 'scene2_tricked_wolf',
        narration: `You lead the excited wolf over to a tree, then you bend a branch down low, tie the wolf's leg to it, and suddenly let the branch snap back up, 
                  trapping the poor creature in the air. Laughing at your own cleverness, you walk away calling out, "That's how I teach music!" The wolf howls in pain and anger behind you as you leave.
                  Still feeling lonely, you start playing your violin again, and this time a fox appears, completely charmed by your beautiful tune. 
                  "Please, will you teach me to play!" the fox begs eagerly.`,
        question: "The fox wants to learn from you just like the wolf did. What will you do now?",
        choices: [
          {
            id: 'A',
            text: "Trick the fox the same way you tricked the wolf.",
            preview: "You decide to repeat the same cruel trick, tying the fox's legs together under a heavy stone and leaving it completely helpless.",
            moralImpact: { honesty: -15, empathy: -15, arrogance: 15, riskAwareness: -12, responsibility: -12, fairness: -10, wisdom: -12, humility: -15, duty: -10 },
            nextScene: 'scene3_tricked_both'
          },
          {
            id: 'B',
            text: "Feel guilty and genuinely try to help the fox.",
            preview: "You start to feel bad about what you did to the wolf, and you decide to make up for it by being kind to the fox this time.",
            moralImpact: { empathy: 15, responsibility: 12, humility: 12, honesty: 8, wisdom: 10, fairness: 8, duty: 8, riskAwareness: 5 },
            nextScene: 'scene3_redemption_fox'
          },
          {
            id: 'C',
            text: "Tell the fox to stay away from you.",
            preview: "You warn the fox to leave you alone and stay far away, avoiding causing more harm but also avoiding any kindness.",
            moralImpact: { responsibility: 8, riskAwareness: 8, wisdom: 5, honesty: 5, empathy: -5, duty: -5 },
            nextScene: 'scene3_warned_fox'
          },
          {
            id: 'D',
            text: "Run away from the fox in fear of revenge.",
            preview: "You become worried that the animals might seek revenge for what you've done, so you quickly run away before the fox can ask again.",
            moralImpact: { riskAwareness: 8, wisdom: -8, responsibility: -10, duty: -10, humility: -8, empathy: -5 },
            nextScene: 'scene3_fled'
          }
        ]
      },

      // Path: Honest with wolf
      scene2_honest: {
        id: 'scene2_honest',
        narration: `The wolf nods with a sad expression and slowly disappears back into the trees, accepting your honest answer. 
                    You continue on your way, playing your violin once more, and a fox emerges from the forest, drawn in by the beauty of your music. 
                    "What an incredible gift you have! Would you be willing to share your talent with me?" the fox asks with hopefulness in its voice.`,
        question: "The fox is asking for your help now. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Be honest again and explain you can't teach animals.",
            preview: "You decide to keep your honesty and integrity, treating the fox with exactly the same truthfulness you showed the wolf earlier.",
            moralImpact: { honesty: 12, fairness: 12, wisdom: 10, responsibility: 8, humility: 8, duty: 5, riskAwareness: 5 },
            nextScene: 'scene3_consistent_honesty'
          },
          {
            id: 'B',
            text: "Try to teach the fox in a kind way.",
            preview: "You feel moved by the fox's sincere request, and you decide to help it despite having refused the wolf just moments ago.",
            moralImpact: { empathy: 15, fairness: -8, responsibility: 5, duty: 5, wisdom: -5, honesty: -5 },
            nextScene: 'scene3_helping_fox'
          },
          {
            id: 'C',
            text: "Trick the fox for fun, breaking your earlier honesty.",
            preview: "You abandon the principles you just showed and deceive the fox cruelly, completely contradicting your earlier honest behavior.",
            moralImpact: { honesty: -20, fairness: -18, arrogance: 12, empathy: -15, responsibility: -12, wisdom: -15, humility: -15, duty: -12, riskAwareness: -10 },
            nextScene: 'scene3_betrayed_values'
          },
          {
            id: 'D',
            text: "Suggest the fox find another teacher.",
            preview: "You politely redirect the fox to look elsewhere for help, staying honest without actually helping directly yourself.",
            moralImpact: { honesty: 8, responsibility: 8, wisdom: 8, empathy: 5, duty: 5, fairness: 5 },
            nextScene: 'scene3_redirected'
          }
        ]
      },

      // Path: Kind to wolf
      scene2_kind: {
        id: 'scene2_kind',
        narration: `You patiently work with the wolf, taking time to carve a simple wooden flute and showing it carefully how to hold it properly. 
                    Though the wolf struggles quite a bit with the instrument, it's deeply grateful for your kindness and patience, and eventually it manages to learn a basic melody.
                       "Thank you so much, friend!" the wolf says happily before leaving with a smile on its face. Not long after, a fox appears,
                        having heard the beautiful music you were playing. "Will you teach me too?" it asks with interest.`,
        question: "After helping the wolf so kindly, the fox now seeks your guidance as well. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Teach the fox with the same kindness you showed the wolf.",
            preview: "You continue down your generous path, helping the fox with the exact same patience and care you gave the wolf.",
            moralImpact: { empathy: 15, fairness: 15, responsibility: 12, duty: 12, humility: 10, wisdom: 10, honesty: 8, riskAwareness: 5 },
            nextScene: 'scene3_kind_to_all'
          },
          {
            id: 'B',
            text: "Tell the fox you're too tired right now.",
            preview: "You're completely worn out from teaching the wolf and you need some rest. The fox seems to understand your situation.",
            moralImpact: { honesty: 12, responsibility: 8, wisdom: 8, empathy: 5, fairness: 5, duty: 5, humility: 5 },
            nextScene: 'scene3_tired'
          },
          {
            id: 'C',
            text: "Trick the fox despite being kind to the wolf.",
            preview: "You suddenly betray your earlier kindness and act with cruelty instead, showing inconsistency and a mean spirit.",
            moralImpact: { honesty: -20, empathy: -18, fairness: -20, responsibility: -15, wisdom: -15, arrogance: 12, humility: -18, duty: -15, riskAwareness: -10 },
            nextScene: 'scene3_inconsistent'
          },
          {
            id: 'D',
            text: "Teach the fox but demand something in return.",
            preview: "You offer to help but this time you ask for payment, treating the fox differently than you treated the wolf.",
            moralImpact: { fairness: -12, arrogance: 10, empathy: -8, humility: -8, duty: -5, wisdom: -5, responsibility: -5 },
            nextScene: 'scene3_transactional'
          }
        ]
      },

      // Path: Ignored wolf
      scene2_ignored: {
        id: 'scene2_ignored',
        narration: `The wolf stands there watching you walk away, looking confused and hurt by your complete indifference. 
                  You walk deeper into the forest and begin playing your violin once more, and a fox appears from the shadows. 
                  "Please teach me your wonderful music!" it says with great excitement.`,
        question: "Will you treat the fox any differently than you treated the wolf?",
        choices: [
          {
            id: 'A',
            text: "Ignore the fox too.",
            preview: "You continue your pattern of indifference, showing no interest in helping anyone at all.",
            moralImpact: { empathy: -12, responsibility: -10, duty: -10, fairness: -8, wisdom: -8, humility: -5 },
            nextScene: 'scene3_all_ignored'
          },
          {
            id: 'B',
            text: "Help the fox this time.",
            preview: "You decide to be kinder to the fox than you were to the wolf, changing your behavior from before.",
            moralImpact: { empathy: 12, fairness: -8, responsibility: 5, duty: 5, wisdom: -5, humility: 5 },
            nextScene: 'scene3_selective_kindness'
          },
          {
            id: 'C',
            text: "Trick the fox.",
            preview: "You suddenly turn cruel and decide to deceive the fox just for your own amusement.",
            moralImpact: { honesty: -15, empathy: -15, arrogance: 10, fairness: -12, responsibility: -12, wisdom: -10, humility: -12, duty: -10, riskAwareness: -8 },
            nextScene: 'scene3_cruel_turn'
          },
          {
            id: 'D',
            text: "Apologize and explain you were being rude earlier.",
            preview: "You take a moment to reflect on your earlier behavior and try to make things right by being honest.",
            moralImpact: { humility: 15, honesty: 12, empathy: 12, wisdom: 10, responsibility: 10, duty: 8, fairness: 8, riskAwareness: 5 },
            nextScene: 'scene3_apology'
          }
        ]
      },

      // TRICKED BOTH PATH
      scene3_tricked_both: {
        id: 'scene3_tricked_both',
        narration: `You deceive the fox in exactly the same way you deceived the wolf, tying its legs together tightly under a heavy stone and leaving it stuck.
                   Laughing once more at your own cleverness, you continue on your way through the forest. For the third time, you take out your violin and play a
                    beautiful melody, and now a small hare comes hopping over curiously. "Your music is absolutely wonderful! Would you be willing to teach me?" the hare asks with innocent eyes.`,
        question: "You've already tricked two animals with your cruel games. What about the hare?",
        choices: [
          {
            id: 'A',
            text: "Trick the hare too—third time's the charm!",
            preview: "You continue your pattern of cruel deception, deciding to trap the hare just like you trapped the others before it.",
            moralImpact: { honesty: -18, empathy: -18, riskAwareness: -18, arrogance: 18, responsibility: -15, fairness: -15, wisdom: -18, humility: -18, duty: -15 },
            nextScene: 'scene4_all_tricked'
          },
          {
            id: 'B',
            text: "Stop this madness and apologize to the hare.",
            preview: "You suddenly realize you've gone way too far with your tricks, and you decide to change your ways right now.",
            moralImpact: { humility: 15, wisdom: 15, empathy: 12, responsibility: 12, honesty: 10, duty: 10, fairness: 8, riskAwareness: 8 },
            nextScene: 'scene4_late_redemption'
          },
          {
            id: 'C',
            text: "Warn the hare about the dangers of trusting strangers.",
            preview: "You choose not to trick the hare this time, but you also don't apologize for the terrible things you've already done.",
            moralImpact: { wisdom: 12, responsibility: 8, riskAwareness: 8, honesty: 5, duty: 5, empathy: -5, humility: -5 },
            nextScene: 'scene4_warned_hare'
          },
          {
            id: 'D',
            text: "Run away before the hare can ask anything.",
            preview: "You become fearful that the consequences of your actions might catch up to you, so you flee before anything else can happen.",
            moralImpact: { riskAwareness: 12, responsibility: -15, wisdom: -10, duty: -12, empathy: -8, humility: -8, fairness: -5 },
            nextScene: 'scene4_fled_guilt'
          }
        ]
      },

      // KIND TO ALL PATH
      scene3_kind_to_all: {
        id: 'scene3_kind_to_all',
        narration: `You patiently teach the fox with care and attention, and it learns with pure joy in its heart. 
                  Both the wolf and fox are deeply grateful for your kindness and teaching. As you continue your journey through the forest, a small hare appears on the path ahead.
                  "I've heard wonderful stories about your kindness! Would you be willing to teach me too?" the hare asks hopefully.`,
        question: "Your reputation for kindness has spread among the forest animals. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Of course! Help the hare as well.",
            preview: "You continue down your path of generosity and kindness, treating all the creatures you meet with care and patience.",
            moralImpact: { empathy: 15, fairness: 12, responsibility: 12, duty: 12, humility: 10, wisdom: 10, honesty: 8, riskAwareness: 5 },
            nextScene: 'ending_kindness_prevails'
          },
          {
            id: 'B',
            text: "You're too tired—politely decline.",
            preview: "You've already done plenty of good deeds for the day, and now you really need to rest and recover your energy.",
            moralImpact: { honesty: 12, responsibility: 10, wisdom: 10, empathy: 5, duty: 5, fairness: 5, humility: 8 },
            nextScene: 'ending_balanced_kindness'
          },
          {
            id: 'C',
            text: "Ask the hare to spread word of your teaching.",
            preview: "You agree to help the hare, but you also want recognition and credit for all the good deeds you've been doing.",
            moralImpact: { empathy: 10, arrogance: 12, duty: 5, responsibility: 5, humility: -10, wisdom: -5, fairness: -5 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Teach the hare and ask nothing in return.",
            preview: "You practice pure kindness and generosity, helping simply because it's the right thing to do, without expecting anything back.",
            moralImpact: { empathy: 15, humility: 15, fairness: 12, duty: 12, responsibility: 10, wisdom: 10, honesty: 8, riskAwareness: 5 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },

      // CONSISTENT HONESTY PATH
      scene3_consistent_honesty: {
        id: 'scene3_consistent_honesty',
        narration: `The fox, just like the wolf before it, accepts your honest answer without complaint and quietly leaves the area.
                   Soon after, a hare appears, drawn in by the lovely music you've been playing. "Would you possibly be willing to teach me?" the hare asks politely.`,
        question: "Will you maintain your pattern of honesty with the hare as well?",
        choices: [
          {
            id: 'A',
            text: "Yes, be honest with the hare as before.",
            preview: "You stay true to your principles and values, treating all the creatures fairly and with the same honest approach.",
            moralImpact: { honesty: 15, fairness: 15, wisdom: 12, responsibility: 10, humility: 10, duty: 8, riskAwareness: 5 },
            nextScene: 'ending_honest_path'
          },
          {
            id: 'B',
            text: "Try to help the hare this time.",
            preview: "Your heart softens and you decide to actually help this time, changing your approach from what you did before.",
            moralImpact: { empathy: 12, fairness: -8, responsibility: 5, duty: 5, wisdom: -5, humility: 5 },
            nextScene: 'ending_softened_heart'
          },
          {
            id: 'C',
            text: "Trick the hare, breaking your pattern of honesty.",
            preview: "You suddenly abandon all your principles and turn to cruelty instead, betraying the honesty you showed before.",
            moralImpact: { honesty: -20, empathy: -18, fairness: -18, arrogance: 15, responsibility: -15, wisdom: -18, humility: -18, duty: -15, riskAwareness: -12 },
            nextScene: 'ending_betrayed_self'
          },
          {
            id: 'D',
            text: "Stop playing music to avoid more encounters.",
            preview: "You choose solitude and isolation to maintain your stance, avoiding any more difficult situations with forest animals.",
            moralImpact: { wisdom: 10, responsibility: 8, riskAwareness: 8, honesty: 5, duty: 5, empathy: -5, fairness: -5 },
            nextScene: 'ending_chosen_solitude'
          }
        ]
      },

      scene3_helping_fox: {
        id: 'scene3_helping_fox',
        narration: `You decide to teach the fox, even though you had refused to help the wolf just a short while ago.
                     As you patiently show the fox how to play, you start feeling conflicted and uncomfortable about your inconsistent behavior.
                      The fox learns happily, completely unaware that you treated the wolf differently. Just then, a hare appears and watches your teaching session with great interest. "Will you teach me too?" the hare asks with excitement.`,
        question: "The hare wants to learn from you now. Will you continue helping others, or will you stop?",
        choices: [
          {
            id: 'A',
            text: "Teach the hare as well—continue being helpful to everyone.",
            preview: "You decide to help everyone you meet from this point forward, despite the fact that you weren't fair to the wolf earlier.",
            moralImpact: { empathy: 15, fairness: -8, responsibility: 12, duty: 10, wisdom: 5, humility: 5, honesty: -5 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Refuse the hare—you're already being inconsistent enough.",
            preview: "You decide to stop helping others now to avoid creating even more unfairness with your contradictory choices.",
            moralImpact: { wisdom: 10, fairness: 8, responsibility: 8, riskAwareness: 5, honesty: 5, empathy: -5, duty: -5 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Admit your inconsistency and apologize honestly.",
            preview: "You confess that you made a mistake and should have helped the wolf too, being honest about your contradictory behavior.",
            moralImpact: { honesty: 15, humility: 15, wisdom: 12, empathy: 10, responsibility: 10, fairness: 8, duty: 8, riskAwareness: 5 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Leave before making more inconsistent choices.",
            preview: "You run away to avoid the growing confusion and problems created by your contradictory and unfair behavior.",
            moralImpact: { responsibility: -12, wisdom: -10, duty: -10, fairness: -8, empathy: -8, humility: -5, riskAwareness: 5 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },

      scene3_betrayed_values: {
        id: 'scene3_betrayed_values',
        narration: `Despite being completely honest with the wolf earlier, you now trick the fox in a cruel and painful way. The fox howls in terrible pain as you laugh and casually 
                  walk away from the scene. Your earlier honesty now feels like it was completely fake and meaningless. A hare suddenly appears from the bushes, having witnessed everything
                  you just did to the fox. "You... you really hurt that fox badly," the hare says while backing away in fear. "Are you planning to hurt me too?"`,
        question: "The hare has seen your cruelty with its own eyes. What will you do now?",
        choices: [
          {
            id: 'A',
            text: "Trick the hare too—you've already crossed that line anyway.",
            preview: "You fully embrace cruelty and meanness now, completely abandoning any pretense of being honest or good.",
            moralImpact: { honesty: -18, empathy: -18, arrogance: 18, fairness: -15, responsibility: -15, wisdom: -18, humility: -18, duty: -15, riskAwareness: -12 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Try to explain that the fox was somehow different.",
            preview: "You make up weak and unconvincing excuses to justify your inconsistent and contradictory behavior.",
            moralImpact: { honesty: -15, responsibility: -12, wisdom: -12, fairness: -10, duty: -10, empathy: -8, humility: -8, arrogance: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Apologize to the hare and go free the fox right now.",
            preview: "You suddenly realize the terrible mistake you've made, and you try to make things right immediately.",
            moralImpact: { humility: 15, empathy: 15, responsibility: 15, wisdom: 12, honesty: 12, duty: 12, fairness: 10, riskAwareness: 8 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Run away from the hare's judgment and criticism.",
            preview: "You feel unable to face the consequences of your contradictory actions, so you simply run away from the situation.",
            moralImpact: { responsibility: -15, wisdom: -12, duty: -12, fairness: -10, empathy: -10, humility: -10, honesty: -8, riskAwareness: 8 },
            nextScene: 'ending_fled_shame'
          }
        ]
      },

  





      scene3_redirected: {
        id: 'scene3_redirected',
        narration: `You politely suggest to the fox that it should find another teacher, perhaps someone who is better suited to teaching animals how to play music. 
                  The fox nods with understanding and walks away without any hard feelings. Just then, a hare comes bounding up to you with energy and excitement.
                   "I'll try my luck with you! Can you possibly teach me music?" it asks with a hopeful look in its eyes.`,
        question: "Another animal is now asking for your help. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Redirect the hare in the same polite way.",
            preview: "You maintain consistency in your approach, treating all the animals with the same polite but firm response.",
            moralImpact: { honesty: 10, fairness: 15, responsibility: 5 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Actually try to help the hare this time.",
            preview: "Something about the hare's enthusiasm and energy touches your heart and changes your mind about helping.",
            moralImpact: { empathy: 10, fairness: -5 },
            nextScene: 'ending_softened_heart'
          },
          {
            id: 'C',
            text: "Trick the hare—you're tired of being nice to everyone.",
            preview: "Your patience has run out completely and you suddenly turn cruel instead of staying polite.",
            moralImpact: { honesty: -15, empathy: -15, arrogance: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Stop playing music entirely to avoid these situations.",
            preview: "You decide the best solution is to avoid these difficult situations altogether by not playing music anymore.",
            moralImpact: { wisdom: 5, responsibility: 5 },
            nextScene: 'ending_chosen_solitude'
          }
        ]
      },

      scene3_tired: {
        id: 'scene3_tired',
        narration: `You tell the fox honestly that you're completely exhausted from spending so much time and energy teaching the wolf earlier. 
                    The fox understands your situation completely and kindly offers to bring you some food to help you regain your strength. Touched by this unexpected kindness,
                      you rest for a while and recover. Later on, a hare appears and approaches you. 
                      "The fox told me you're an excellent teacher! When you're feeling ready and rested, could you possibly teach me too?"`,
        question: "After getting some rest, do you have enough energy to help the hare now?",
        choices: [
          {
            id: 'A',
            text: "Yes, teach the hare—you're feeling rested and ready now.",
            preview: "You're recharged and full of energy again, ready to help another animal with kindness and patience.",
            moralImpact: { responsibility: 10, empathy: 10, fairness: 10 },
            nextScene: 'ending_balanced_kindness'
          },
          {
            id: 'B',
            text: "Apologize but explain you still need more rest.",
            preview: "You're honest and upfront about your limits and needs, even if it means disappointing the hare by saying no.",
            moralImpact: { honesty: 15, wisdom: 10, humility: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Trick the hare—teaching is just too tiring and difficult.",
            preview: "Your exhaustion makes you turn cruel and mean, taking the easy but harmful path instead of being honest.",
            moralImpact: { honesty: -15, empathy: -15, responsibility: -10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Teach briefly, then set clear boundaries for the future.",
            preview: "You decide to help the hare but also make it clear what your limits are going forward.",
            moralImpact: { wisdom: 15, responsibility: 10, fairness: 10 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },

      scene3_inconsistent: {
        id: 'scene3_inconsistent',
        narration: `After teaching the wolf with such kindness and patience, you suddenly and cruelly trick the fox for absolutely no good reason at all.
                   The fox cries out loudly in both pain and a deep sense of betrayal. The wolf, hearing all the commotion and noise, 
                   comes running back and sees exactly what you've just done to its friend. "How could you possibly do this?!" the wolf growls angrily at you. 
                   "You were so incredibly kind and patient with me, but then you turned around and were cruel to my friend!" A hare appears at that moment,
                    quietly witnessing this entire confrontation.`,
        question: "The wolf is furious with you, the fox is trapped and hurt, and the hare is watching everything. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Free the fox immediately and apologize to both animals.",
            preview: "You admit your terrible inconsistency and contradictory behavior, and you try your best to make things right.",
            moralImpact: { humility: 20, honesty: 15, empathy: 15 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Trick the wolf too—make your behavior 'consistent' that way.",
            preview: "You try to solve your inconsistency problem by being consistently cruel to everyone instead, which is terrible logic.",
            moralImpact: { honesty: -20, wisdom: -20, arrogance: 15 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Make up excuses about why the fox somehow deserved it.",
            preview: "You try to justify your cruel actions by making up lies and false reasons.",
            moralImpact: { honesty: -15, responsibility: -15, wisdom: -10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Run away from this messy situation as fast as you can.",
            preview: "You're completely unable to face the consequences of your actions, so you simply flee from everything.",
            moralImpact: { responsibility: -20, wisdom: -10 },
            nextScene: 'ending_coward_flee'
          }
        ]
      },

      scene3_transactional: {
        id: 'scene3_transactional',
        narration: `You agree to teach the fox but you demand payment in the form of berries, which is completely different from the free help you gave to the wolf earlier. 
        The fox reluctantly agrees to your demand and goes to bring you a basket full of berries. As you sit there eating the berries, a small hare appears and approaches you. 
        "I don't have any berries to give you, but may I still learn from you?" the hare asks with hopefulness despite having nothing to offer.`,
        question: "The hare has no way to pay you. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Refuse to help—no payment means no teaching.",
            preview: "You stick firmly to your transactional business approach, treating teaching as nothing more than pure business.",
            moralImpact: { fairness: -10, empathy: -10, arrogance: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Teach the hare for free, realizing that asking for payment was wrong.",
            preview: "You recognize your mistake in charging the fox and decide to return to being generous and kind.",
            moralImpact: { humility: 15, fairness: 10, empathy: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Trick the hare as 'payment' for wasting your valuable time.",
            preview: "You turn cruel and mean when your greed and desire for payment isn't satisfied by the hare.",
            moralImpact: { honesty: -15, empathy: -15, arrogance: 15 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Ask what the hare can offer you instead of berries.",
            preview: "You're willing to be flexible about the payment, but you're still focused on getting something in return for your help.",
            moralImpact: { fairness: 5, arrogance: 5 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },

      scene3_all_ignored: {
        id: 'scene3_all_ignored',
        narration: `You ignore the fox completely, just like you ignored the wolf before it. Now a small hare appears on the path, full of hope and excitement. 
        "Please, kind fiddler, won't you please teach me music?" the hare asks politely. This is now your third chance to actually connect with someone and help them.`,
        question: "Will you break your pattern of cold indifference this time?",
        choices: [
          {
            id: 'A',
            text: "Ignore the hare too—stay consistent with your approach.",
            preview: "You continue to maintain your cold and distant indifference toward everyone you meet.",
            moralImpact: { empathy: -15, responsibility: -10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Finally help someone—the hare breaks through to you.",
            preview: "Something about the hare's sincere persistence and politeness finally touches your heart.",
            moralImpact: { empathy: 15, humility: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Trick the hare—your indifference evolves into active cruelty.",
            preview: "Your cold indifference suddenly transforms and evolves into active harm and cruelty.",
            moralImpact: { empathy: -20, honesty: -15 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Apologize for your earlier cold behavior and offer to help.",
            preview: "You recognize the harmful pattern you've been following and make a conscious decision to change it right now.",
            moralImpact: { humility: 20, empathy: 15, wisdom: 10 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },

      scene3_selective_kindness: {
        id: 'scene3_selective_kindness',
        narration: `You help the fox with warmth and kindness after having completely ignored the wolf earlier. As you patiently teach the fox, 
                  you start feeling conflicted and uncomfortable about your selective and unfair kindness. The wolf, having quietly followed you through the forest,
                   watches from the bushes and sees you helping the fox so generously. Just then, a hare appears and asks if you'll teach it lessons too.`,
        question: "The wolf has now seen your unfair and inconsistent treatment. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Acknowledge the wolf's presence and apologize for ignoring it earlier.",
            preview: "You openly admit that your selective kindness was wrong and unfair, and you try to make things right with the wolf.",
            moralImpact: { humility: 15, fairness: 15, honesty: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Ignore the wolf again and help the hare instead.",
            preview: "You continue your pattern of selective and unfair kindness, treating different animals in different ways without good reason.",
            moralImpact: { fairness: -15, empathy: -10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Stop helping anyone at all to avoid appearing unfair.",
            preview: "You try to solve the unfairness problem by helping no one at all, which isn't really a great solution.",
            moralImpact: { wisdom: -5, responsibility: -5 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Offer to teach all three animals together as a group.",
            preview: "You turn this difficult situation into a wonderful opportunity for inclusive group learning where everyone benefits.",
            moralImpact: { fairness: 20, empathy: 15, wisdom: 15 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },

      scene3_cruel_turn: {
        id: 'scene3_cruel_turn',
        narration: `After ignoring the wolf earlier, you now trick the fox in a cruel and painful way. The fox struggles desperately 
        in your trap while you stand there laughing at its suffering. A hare witnesses this terrible scene and immediately starts to run away in fear of you.`,
        question: "The hare is running away in terror. Do you chase after it?",
        choices: [
          {
            id: 'A',
            text: "Chase the hare down and trick it too.",
            preview: "You're now actively hunting down animals just to harm them, which shows how cruel you've become.",
            moralImpact: { empathy: -20, honesty: -15, arrogance: 15 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Let the hare go free and release the fox from the trap.",
            preview: "Seeing the hare's fear makes you suddenly realize what kind of person you've become, and it shocks you.",
            moralImpact: { humility: 15, empathy: 15, wisdom: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Call out to the hare that you won't hurt it.",
            preview: "You try to limit and control your cruelty, though you've already caused harm to the poor fox.",
            moralImpact: { responsibility: 5, honesty: -5 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Sit down quietly with the consequences of what you've done.",
            preview: "You stop all your actions and take time to reflect deeply on your cruel behavior.",
            moralImpact: { wisdom: 10, humility: 10, responsibility: 5 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },

      scene3_apology: {
        id: 'scene3_apology',
        narration: `You offer a sincere apology to the fox for your earlier rude and cold behavior toward the wolf. "I was completely wrong
                   to ignore my fellow creatures in the forest," you say with genuine humility in your voice. The fox truly appreciates your honesty and willingness to admit your mistake. 
                   Together, you and the fox go find the wolf so you can apologize to it as well. A hare then appears, having heard stories about your change of heart and behavior.
                    "I've heard that you're teaching now with kindness and patience," the hare says. "May I please learn from you?"`,
        question: "Your reputation is slowly being rebuilt among the forest animals. How will you proceed?",
        choices: [
          {
            id: 'A',
            text: "Teach the hare with genuine kindness and care.",
            preview: "You prove that your change of heart is real and lasting by continuing to help others with true kindness.",
            moralImpact: { empathy: 15, humility: 15, fairness: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Explain that you're still learning to be kind yourself.",
            preview: "You're honest and open about being on your own ongoing journey of personal improvement and growth.",
            moralImpact: { honesty: 15, humility: 15, wisdom: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Teach the hare but expect praise and recognition for your change.",
            preview: "You do help the hare, but your ego and need for recognition undermines the true goodness of the act.",
            moralImpact: { empathy: 5, arrogance: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Suggest all the animals learn together as a community.",
            preview: "You create something truly beautiful and meaningful from your earlier mistakes and bad behavior.",
            moralImpact: { wisdom: 15, fairness: 15, empathy: 15, responsibility: 10 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },

      // ALL TRICKED - FINAL SCENE
      scene4_all_tricked: {
        id: 'scene4_all_tricked',
        narration: `You tied the hare firmly to a tree while pretending to teach it, then left it stuck there just like the others.
                     But as you walked away laughing at your own cleverness, all three animals—the wolf, fox, and hare—managed to break free and escape from their traps.
                      Furious and filled with anger at your terrible betrayal, they banded together and chased after you through the forest, their 
                      angry cries echoing loudly between the trees. Just as they were about to catch up to you and corner you, a woodcutter happened to pass by on the path.`,
        question: "The animals are closing in on you fast! What will you do?",
        choices: [
          {
            id: 'A',
            text: "Cry out loudly to the woodcutter for help and rescue.",
            preview: "You seek rescue and protection from someone else, completely avoiding responsibility for all your terrible actions.",
            moralImpact: { responsibility: -10, arrogance: -5 },
            nextScene: 'ending_saved_but_unchanged'
          },
          {
            id: 'B',
            text: "Turn and face the animals, then apologize sincerely to them.",
            preview: "You take full accountability for what you've done and ask for their forgiveness with true sincerity.",
            moralImpact: { humility: 20, honesty: 15, empathy: 15, wisdom: 10 },
            nextScene: 'ending_redemption_earned'
          },
          {
            id: 'C',
            text: "Try to trick the animals again with false promises and lies.",
            preview: "You double down on your deception and lies, showing absolutely no remorse or regret for your actions.",
            moralImpact: { honesty: -15, wisdom: -15, arrogance: 15 },
            nextScene: 'ending_deserved_consequence'
          },
          {
            id: 'D',
            text: "Run and hide somewhere, hoping they'll eventually give up.",
            preview: "You flee like a complete coward, avoiding all responsibility and consequences for what you've done.",
            moralImpact: { responsibility: -15, riskAwareness: 5 },
            nextScene: 'ending_coward_flee'
          }
        ]
      },

      // LATE REDEMPTION PATH
      scene4_late_redemption: {
        id: 'scene4_late_redemption',
        narration: `You tell the hare honestly and openly about everything you did to the wolf and fox, and you apologize sincerely for your cruelty and terrible behavior. 
                    The hare is shocked and surprised by what you tell it, but it genuinely appreciates your honesty and willingness to confess. Just at that moment, the wolf and
                     fox appear, having managed to escape from their traps. They see you speaking honestly and openly with the hare about what you did.`,
        question: "The wolf and fox are now confronting you face to face. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Apologize to them both sincerely and offer to make amends however you can.",
            preview: "You face your mistakes directly and honestly, and you seek their forgiveness with true sincerity.",
            moralImpact: { humility: 20, honesty: 15, empathy: 15 },
            nextScene: 'ending_forgiveness_granted'
          },
          {
            id: 'B',
            text: "Blame your loneliness and isolation for causing your bad actions.",
            preview: "You make excuses for your behavior instead of taking full and complete responsibility for your choices.",
            moralImpact: { responsibility: -10, humility: -5 },
            nextScene: 'ending_weak_apology'
          },
          {
            id: 'C',
            text: "Run away from them in overwhelming shame and guilt.",
            preview: "You can't face them and the consequences of your actions, so you simply run away.",
            moralImpact: { responsibility: -15, wisdom: -10 },
            nextScene: 'ending_fled_shame'
          },
          {
            id: 'D',
            text: "Ask the hare to vouch for your genuine change of heart.",
            preview: "You seek validation and support from the hare to help prove to the others that you've truly changed.",
            moralImpact: { wisdom: 5, responsibility: 5 },
            nextScene: 'ending_validated_change'
          }
        ]
      },

      scene4_warned_hare: {
        id: 'scene4_warned_hare',
        narration: `You take the time to warn the hare seriously about the dangers of trusting strangers who might trick and deceive them for their own amusement.
                     The hare thanks you sincerely for the warning and leaves the area safely without being harmed. Meanwhile, the wolf and fox both manage to escape from their
                      traps and, though they're still angry at you for what you did, they appreciate that you at least didn't harm the innocent hare. They come together and confront you as a united pair.`,
        question: "The wolf and fox want answers and explanations from you. What will you tell them?",
        choices: [
          {
            id: 'A',
            text: "Apologize sincerely and completely for harming them both.",
            preview: "You take full responsibility for your cruel actions and don't make any excuses for what you did.",
            moralImpact: { humility: 20, honesty: 15, empathy: 15 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Say you were testing their trust—which is a complete lie.",
            preview: "You make up a false and weak excuse to try to justify your cruel behavior to them.",
            moralImpact: { honesty: -20, wisdom: -10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Offer to make amends through your actions, not just words.",
            preview: "You understand that words alone aren't enough—you'll prove your change through actual deeds and actions.",
            moralImpact: { responsibility: 15, wisdom: 10, empathy: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Run away because you can't face them and their anger.",
            preview: "Despite warning the hare about trust, you're still too cowardly to face the consequences of your own actions.",
            moralImpact: { responsibility: -15, wisdom: -10 },
            nextScene: 'ending_coward_flee'
          }
        ]
      },

      scene4_fled_guilt: {
        id: 'scene4_fled_guilt',
        narration: `You ran away quickly before the hare could even ask you anything, with guilt weighing heavily on your heart and mind. You hide yourself in a 
                      dark cave, with your violin resting beside you on the ground. The wolf and fox, now freed from their traps, manage to track you down by following your trail. 
                      "Running away won't erase or change what you did to us," they say firmly from the entrance of the cave.`,
        question: "They've found you and cornered you. There's nowhere left to run away to. What will you do now?",
        choices: [
          {
            id: 'A',
            text: "Come out of the cave and face them with complete honesty.",
            preview: "You finally stop running away from your problems and accept full accountability for your actions.",
            moralImpact: { humility: 20, wisdom: 15, responsibility: 15 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Try to sneak past them quietly and keep running away.",
            preview: "You're still far too afraid and cowardly to face the consequences of what you've done.",
            moralImpact: { responsibility: -20, wisdom: -15 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'C',
            text: "Offer your precious violin as payment for your crimes against them.",
            preview: "You try to buy their forgiveness with material possessions instead of taking true responsibility.",
            moralImpact: { responsibility: 5, wisdom: -5 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Break down crying and confess everything you've done.",
            preview: "Your emotional breakdown leads to a complete and honest confession of all your terrible actions.",
            moralImpact: { humility: 20, honesty: 20, empathy: 15 },
            nextScene: 'ending_default_not_maped'
          }
        ]
      },
      







      // ENDINGS ---
      ending_default_not_maped:{
        id: 'ending_default_not_maped',
        isEnding: true,
        endingType: 'Unexpected Ending '
        // endingType: 'To be defined by developer..  Go to - frontend/src/data/storyData.js/ line 1030 '
      },

      // ENDINGS - Complete all 8 endings

      ending_saved_but_unchanged: {
        id: 'ending_saved_but_unchanged',
        narration: `The fiddler cried out for help. Seeing the animals appear aggressive, the woodcutter scared them away with his axe. The fiddler smiled, proud of his cleverness—but this time, he said no more music for the day. He walked away unchanged, having learned nothing from his cruel games. The forest remembered his betrayal, and no creature ever trusted a fiddler's music again.`,
        isEnding: true,
        endingType: 'unchanged'
      },

      ending_redemption_earned: {
        id: 'ending_redemption_earned',
        narration: `You stood still and faced the animals. "I was cruel and selfish," you admitted, your voice breaking. "I used your trust for my amusement. I am deeply sorry." The wolf, fox, and hare stopped. They saw genuine remorse in your eyes. "Your music brought us joy," said the wolf, "but your tricks brought us pain." You nodded. "I understand if you cannot forgive me. But I promise—I will never betray trust again." The animals looked at each other. Slowly, the hare stepped forward. "Everyone deserves a second chance," it said. The fox and wolf agreed. "Prove it with your actions, not just words," they said. You bowed deeply. From that day on, you played music to bring joy, never to deceive. The forest forgave you, and you finally found the companionship you had been seeking all along.`,
        isEnding: true,
        endingType: 'redemption'
      },

      ending_deserved_consequence: {
        id: 'ending_deserved_consequence',
        narration: `"Wait! I can teach you all properly this time!" you lied desperately, trying to trick them once more. But the animals had learned their lesson. "Enough of your lies!" growled the wolf. They surrounded you, and the woodcutter, seeing your deceit, simply walked away. "Some people never learn," he muttered. The animals didn't harm you, but they took your violin and broke it. "You don't deserve to make music when you use it to harm others," said the fox. You were left alone in the forest, without your instrument, without friends, and without trust. The consequence of repeated betrayal was complete isolation. Cleverness without kindness had cost you everything.`,
        isEnding: true,
        endingType: 'consequence'
      },

      ending_coward_flee: {
        id: 'ending_coward_flee',
        narration: `You ran and hid behind a bush, trembling in fear. The animals found you easily. "Look at the 'clever' fiddler now," said the fox with contempt. "Hiding like a coward." The wolf shook its head. "You had so much talent, but you wasted it on cruelty." They didn't chase you further—you weren't worth their time. As they walked away, the hare called back, "You'll always be running from the consequences of your actions." You emerged from hiding, alone and ashamed. You left the forest quickly, but you could never escape the memory of your cowardice. Cleverness without courage or kindness had left you empty.`,
        isEnding: true,
        endingType: 'coward'
      },

      ending_forgiveness_granted: {
        id: 'ending_forgiveness_granted',
        narration: `You fell to your knees before the wolf and fox. "I am so deeply sorry," you said, tears streaming down your face. "I was lonely and I thought trickery would make me clever. Instead, I was cruel. I betrayed your trust." You showed them your hands. "I will never play music to deceive again. Please, teach me how to be kind." The wolf and fox looked at your sincere remorse. The hare spoke up: "They're telling the truth now. I felt it." After a long moment, the wolf said, "Redemption is earned through action, not words. But we see your heart has changed." The fox added, "Help us free others who might be trapped by tricksters, and you'll have our forgiveness." You agreed immediately. Together, you all became protectors of the forest, warning others about deceit while sharing genuine music and kindness. Your late redemption became a powerful lesson: it's never too late to choose kindness.`,
        isEnding: true,
        endingType: 'forgiveness'
      },

      ending_weak_apology: {
        id: 'ending_weak_apology',
        narration: `"I... I was just so lonely," you stammered, trying to justify your actions. "I didn't mean to really hurt you. It was the loneliness that made me do it." The wolf's eyes narrowed. "So you blame your feelings instead of taking responsibility?" The fox shook its head sadly. "An apology with excuses is not an apology at all." The hare looked disappointed. "I thought you had truly changed, but you're still avoiding the truth." They walked away, leaving you with your excuses. You realized too late that true apology requires owning your actions completely. The forest taught you a hard lesson: explanations without accountability are meaningless. You left, understanding that you had missed your chance at genuine redemption.`,
        isEnding: true,
        endingType: 'weak_redemption'
      },

      ending_fled_shame: {
        id: 'ending_fled_shame',
        narration: `Unable to face the wolf and fox, you turned and ran deeper into the forest, shame burning in your chest. "Coward!" they called after you, but they didn't pursue. You ran until you could run no more, collapsing by a stream. Looking at your reflection, you saw not a clever fiddler, but someone who couldn't face the consequences of their actions. The hare found you later. "Running from shame doesn't erase what you did," it said gently. "It only adds cowardice to cruelty." You nodded, understanding the truth. You left the forest that night, knowing you had failed not just the animals, but yourself. The lesson was painful: shame without courage to make amends is just another form of cowardice.`,
        isEnding: true,
        endingType: 'fled'
      },

      ending_validated_change: {
        id: 'ending_validated_change',
        narration: `You looked at the hare hopefully. "Please, tell them I've changed. You saw my honesty." The hare considered, then turned to the wolf and fox. "The fiddler did confess their wrongs to me and showed genuine remorse." The wolf and fox listened. "Words to one don't undo actions to many," said the fox. "But," added the wolf, "perhaps there's truth in your change." They gave you a chance to prove yourself. "You must help three other travelers in the forest without any trickery. The hare will watch." You agreed, and over the next weeks, you genuinely helped a lost merchant, a injured bird, and a hungry family, asking nothing in return. The hare reported your good deeds. The wolf and fox returned. "You've earned a second chance," they said. You thanked the hare for believing in you when others couldn't. Sometimes, you learned, redemption requires both change AND someone willing to witness it. You became known as the honest fiddler, the one who learned that kindness is the greatest cleverness of all.`,
        isEnding: true,
        endingType: 'validated'
      },

      ending_kindness_prevails: {
        id: 'ending_kindness_prevails',
        narration: `You taught the hare with the same patience and kindness you had shown the wolf and fox. Word spread through the forest of the generous fiddler who shared music freely. Soon, birds, deer, and even a wise old owl came to learn from you. You never asked for anything in return—the joy on their faces was reward enough. One evening, all the animals gathered to surprise you. They had learned to play together—a beautiful forest orchestra. "You gave us the gift of music," said the wolf, "but more importantly, you gave us the gift of kindness." The fox added, "You were lonely, but instead of taking, you gave. That's true wisdom." The hare presented you with a flower crown. "Thank you for teaching us that the best melodies come from generous hearts." You stayed in that forest, teaching and playing, surrounded by friends. You had set out lonely but clever; you ended up fulfilled and kind. The greatest music, you learned, is the harmony of compassionate hearts working together.`,
        isEnding: true,
        endingType: 'kindness'
      },

      ending_balanced_kindness: {
        id: 'ending_balanced_kindness',
        narration: `"I would love to help," you told the hare honestly, "but I'm exhausted from teaching. Would tomorrow work?" The hare understood completely. "Of course! Rest is important too." The wolf and fox, having learned from you earlier, nodded approvingly. "You taught us music AND boundaries," said the wolf. "That's wise." You rested that night, and the next day, you taught the hare with renewed energy. The forest creatures learned an important lesson from you: kindness doesn't mean depleting yourself—it means giving sustainably. You stayed in the forest, teaching when you could, resting when you needed, and always being honest. The animals respected you not just for your generosity, but for your self-awareness. You proved that true kindness includes kindness to oneself. The music continued, balanced and beautiful.`,
        isEnding: true,
        endingType: 'balanced'
      },

      ending_honest_path: {
        id: 'ending_honest_path',
        narration: `You maintained your honesty with the hare, just as you had with the wolf and fox. "I cannot teach animals to play violin," you said gently but firmly. "It's not something I'm able to do." The hare nodded, disappointed but appreciative of your truthfulness. As you continued your journey, you met a young human who truly wanted to learn music. You taught them with joy and passion. Word spread of the honest fiddler who never made false promises. Years later, you returned to that forest. The wolf, fox, and hare remembered you. "You never gave us what we asked for," said the wolf, "but you gave us something better—respect through honesty." The fox agreed. "You didn't trick us or waste our time with false hope." The hare added, "Your honesty taught us to value truth over empty promises." You realized that kindness isn't always giving people what they want—sometimes it's giving them what's real. Your integrity had earned you lasting respect, and that was worth more than any clever trick.`,
        isEnding: true,
        endingType: 'honest'
      },

      ending_pure_kindness: {
        id: 'ending_pure_kindness',
        narration: `You taught the hare with pure joy, asking nothing in return, expecting no praise or reward. You helped simply because it was right. The wolf, fox, and hare told every creature about your selfless generosity. A traveling merchant heard the stories and sought you out. "I've been searching for someone pure of heart to receive this," he said, presenting you with a magnificent golden violin. "This instrument only plays for those who use music to spread kindness." You tried to refuse—"I need no reward"—but he insisted. "The reward finds those who don't seek it." When you played the golden violin, its music healed sadness, brought peace to troubled hearts, and made flowers bloom even in winter. The forest became a sanctuary of joy. You never played for fame or fortune, only for the happiness of others. Your pure kindness had been rewarded not with material wealth, but with the power to multiply goodness. You learned the deepest truth: when you give without expecting, the universe gives back in ways you never imagined. You became a legend—not as the clever fiddler, but as the fiddler whose heart was as beautiful as their music.`,
        isEnding: true,
        endingType: 'pure'
      },

      // Additional scene endings for other paths

      ending_softened_heart: {
        id: 'ending_softened_heart',
        narration: `After being honest with the wolf and fox, something in your heart shifted when you saw the hare's hopeful eyes. "Actually," you said softly, "I'll try to help you." You spent hours patiently teaching the hare basic rhythm and melody. Though you had refused others, this time felt different—your heart had opened. The hare's gratitude was immense. Word reached the wolf and fox. They returned, curious. "You refused us, but helped the hare?" You nodded. "I'm sorry. I was rigid before. But kindness doesn't have to be consistent to start being real." They understood. "Better late than never," said the wolf. Your softened heart had shown that it's never too late to begin choosing compassion. You continued your journey, now more open to helping where you could. Sometimes, you learned, the path to kindness begins with a single exception that opens the door to transformation.`,
        isEnding: true,
        endingType: 'softened'
      },

      ending_betrayed_self: {
        id: 'ending_betrayed_self',
        narration: `After being honest with the wolf and fox, you suddenly tricked the hare for no reason other than cruel amusement. The wolf and fox, who had respected your honesty, witnessed this betrayal of your own values. "We thought you were principled," said the wolf, disgusted. "But you're just inconsistent and cruel." The fox added, "Honesty meant nothing—it was just another mask." They chased you from the forest, and the hare, freed by their help, looked at you with profound sadness. "You betrayed yourself more than you betrayed me," it said. You left the forest in shame, realizing the painful truth: you had destroyed your own integrity. Without consistency between words and actions, you had nothing—no friends, no respect, and no self-respect. The heaviest burden wasn't the animals' anger, but the knowledge that you had abandoned your own values for a momentary cruel laugh. The forest forgot you quickly, but you could never forget what you had thrown away.`,
        isEnding: true,
        endingType: 'self_betrayal'
      },

      ending_chosen_solitude: {
        id: 'ending_chosen_solitude',
        narration: `You put away your violin and stopped playing music in the forest. No more animals approached you. You walked alone, but with clear conscience. The wolf and fox, who you had treated honestly, watched from afar. "The fiddler chose principle over popularity," observed the wolf. "That takes strength," agreed the fox. Months later, a lost child wandered into the forest, frightened and alone. You found them and played a gentle melody to calm their fears, leading them safely home. The grateful parents tried to reward you, but you refused. "Music should comfort, not deceive," you said. The wolf and fox, having followed to ensure the child's safety, finally approached you. "You chose solitude to maintain your integrity," said the wolf. "But you never stopped being kind when it truly mattered." They invited you to stay in the forest, not as a teacher of music, but as a guardian who understood that sometimes the most important principle is knowing when to act and when to abstain. You found peace in your chosen solitude—a peace that came from living aligned with your values, regardless of loneliness.`,
        isEnding: true,
        endingType: 'solitude'
      },

      // Additional scene 3 and 4 variations

      scene3_redemption_fox: {
        id: 'scene3_redemption_fox',
        narration: `Guilt washed over you as you thought about the trapped wolf. "I'm so sorry," you told the fox. "I tricked the wolf and I feel terrible. Please, let me help you genuinely—no tricks this time." The fox, surprised by your honesty, decided to trust you cautiously. You taught it a simple melody with patience and care. When finished, the fox asked, "What about the wolf?" Together, you went back and freed the wolf. "I'm sorry," you said again. The wolf was angry but saw your genuine remorse. Just then, a hare appeared, having heard your music.`,
        question: "The hare asks to learn. Will you continue your path of redemption?",
        choices: [
          {
            id: 'A',
            text: "Help the hare genuinely, continuing to make amends.",
            preview: "You commit to your redemptive path, helping all who ask.",
            moralImpact: { empathy: 15, honesty: 15, humility: 10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'B',
            text: "Tell them you need time to reflect on your actions first.",
            preview: "You're honest about needing to process your mistakes before helping others.",
            moralImpact: { wisdom: 10, humility: 10, honesty: 10 },
            nextScene: 'ending_reflective_growth'
          },
          {
            id: 'C',
            text: "Trick the hare despite your earlier remorse.",
            preview: "You fall back into old patterns, showing remorse was temporary.",
            moralImpact: { honesty: -20, empathy: -15, wisdom: -10 },
            nextScene: 'ending_false_redemption'
          },
          {
            id: 'D',
            text: "Leave the forest to avoid more temptation.",
            preview: "You remove yourself from situations where you might cause harm.",
            moralImpact: { wisdom: 10, responsibility: 10 },
            nextScene: 'ending_self_exile'
          }
        ]
      },

      scene3_warned_fox: {
        id: 'scene3_warned_fox',
        narration: `"Stay away from me," you told the fox sternly. "I've already tricked the wolf. I don't want to hurt anyone else." The fox, hearing the trapped wolf's cries, understood. "At least you're being honest now," it said before running to free the wolf. They both watched you from a distance as you continued walking, conflicted. A hare then appeared, curious about your music.`,
        question: "How do you handle the hare after warning off the fox?",
        choices: [
          {
            id: 'A',
            text: "Warn the hare away too, staying consistent.",
            preview: "You maintain your boundary, protecting others from yourself.",
            moralImpact: { honesty: 15, responsibility: 10, wisdom: 10 },
            nextScene: 'ending_protected_others'
          },
          {
            id: 'B',
            text: "Help the hare as a test of your self-control.",
            preview: "You challenge yourself to be kind without trickery.",
            moralImpact: { wisdom: 10, empathy: 10, responsibility: 5 },
            nextScene: 'ending_self_control_victory'
          },
          {
            id: 'C',
            text: "Trick the hare—you're tired of resisting.",
            preview: "Your willpower fails and you return to harmful behavior.",
            moralImpact: { honesty: -15, responsibility: -15, wisdom: -10 },
            nextScene: 'ending_default_not_maped'
          },
          {
            id: 'D',
            text: "Ask the freed wolf and fox what you should do.",
            preview: "You seek guidance from those you've harmed.",
            moralImpact: { humility: 15, wisdom: 10 },
            nextScene: 'ending_guided_redemption'
          }
        ]
      },

      scene3_fled: {
        id: 'scene3_fled',
        narration: `You ran away from the fox before it could make a request, paranoid that the trapped wolf would somehow get revenge. You hid behind trees, your heart pounding. But in your panic, you tripped and your violin flew from your hands, landing near a hare. The hare picked it up curiously.`,
        question: "The hare has your precious violin. What do you do?",
        choices: [
          {
            id: 'A',
            text: "Beg the hare to return it and offer to teach music in exchange.",
            preview: "You desperately bargain, finally offering something genuine.",
            moralImpact: { humility: 10, honesty: 5 },
            nextScene: 'ending_desperate_honesty'
          },
          {
            id: 'B',
            text: "Try to trick the hare into a trap to get your violin back.",
            preview: "Even in desperation, you default to deception.",
            moralImpact: { honesty: -15, wisdom: -10, arrogance: 10 },
            nextScene: 'ending_irredeemable'
          },
          {
            id: 'C',
            text: "Admit your wrongdoings and ask for the violin as an act of mercy.",
            preview: "You confess everything, hoping for compassion.",
            moralImpact: { honesty: 15, humility: 15, empathy: 5 },
            nextScene: 'ending_mercy_received'
          },
          {
            id: 'D',
            text: "Leave without the violin—you don't deserve it.",
            preview: "You accept the loss as punishment for your actions.",
            moralImpact: { humility: 20, wisdom: 10, responsibility: 10 },
            nextScene: 'ending_accepted_consequence'
          }
        ]
      },

      // Final missing endings

      ending_reflective_growth: {
        id: 'ending_reflective_growth',
        narration: `"I need time to understand why I hurt others before I can truly help," you told the hare honestly. The wolf and fox respected this. You sat by the forest stream for days, reflecting deeply on your actions. Why had you valued cleverness over kindness? Why had loneliness driven you to cruelty? Slowly, answers came. When you finally emerged, you sought out the wolf, fox, and hare. "I understand now," you said. "I was afraid loneliness meant I was unworthy of friendship, so I tried to prove my worth through cleverness. But real worth comes from how we treat others." You offered to help each of them, not to prove anything, but simply because it was right. They accepted. Your journey of reflection had transformed you from a clever trickster into a wise friend. The forest welcomed you, not for your tricks, but for your growth.`,
        isEnding: true,
        endingType: 'growth'
      },

      ending_false_redemption: {
        id: 'ending_false_redemption',
        narration: `Despite your earlier remorse, you tricked the hare. The wolf and fox, who had begun to believe in your change, witnessed this. "Your apology was a lie," said the wolf with deep disappointment. "Worse than initial cruelty is false redemption," added the fox. They freed the hare and chased you from the forest permanently. You realized you had committed the worst betrayal of all—pretending to change while remaining the same. The forest banned you forever. Wherever you went, word of the "false fiddler" preceded you. You had not only failed to redeem yourself, but had proven that your remorse was just another trick. The lesson was devastating: false redemption is worse than no attempt at all, because it destroys trust in the possibility of genuine change.`,
        isEnding: true,
        endingType: 'false'
      },

      ending_self_exile: {
        id: 'ending_self_exile',
        narration: `"I can't trust myself around others," you admitted to yourself. You left the forest immediately, seeking isolation in the mountains. Years passed in solitude. You played your violin only for yourself, never for others. One day, an elderly traveler got lost near your mountain cabin. Without thinking, you helped them find their way, offering food and shelter. "Why do you live alone?" they asked. You told them your story of trickery and self-imposed exile. The traveler listened thoughtfully. "You punished yourself for cruelty by denying the world your kindness. But isn't that another form of selfishness?" Their words shook you. You realized that true redemption wasn't hiding from temptation, but learning to face it with integrity. You returned to society slowly, carefully, using your music to help others, always vigilant against your old tendencies. Your self-exile had taught you wisdom, and your return taught you courage. You had finally found balance.`,
        isEnding: true,
        endingType: 'exile'
      },

      ending_protected_others: {
        id: 'ending_protected_others',
        narration: `You warned away every animal that approached, protecting them from your own potential cruelty. The forest animals began to understand: here was a fiddler who valued their safety over their own companionship. One day, the wolf approached. "I'm free now, thanks to the fox. I've been watching you turn away everyone who asks for help." You nodded sadly. "It's better than hurting them." The wolf considered this. "What if you're denying the world something beautiful because you're afraid of what you might do? Fear of our worst selves is wise, but it shouldn't paralyze us." The wolf proposed a solution: "Teach me music, but I'll bring the fox and others to watch. Your audience will keep you accountable." You agreed. With witnesses ensuring your integrity, you finally shared your gift safely. You learned that acknowledging dangerous impulses is wise, but community accountability allows growth beyond isolation. The forest became your home, not despite your flaws, but because you learned to manage them responsibly.`,
        isEnding: true,
        endingType: 'protected'
      },

      ending_self_control_victory: {
        id: 'ending_self_control_victory',
        narration: `You decided to test yourself with the hare, determined to help genuinely. Every moment, you fought the urge to trick. Every second, you chose kindness over cleverness. It was the hardest thing you'd ever done. Finally, the hare learned a simple melody and thanked you joyfully. You had done it—helped without harm. The wolf and fox, having watched from afar, approached. "You struggled, but you succeeded," said the wolf. "That's true strength," added the fox. They forgave you, recognizing that victory over one's own worst impulses is the hardest battle. You continued teaching in the forest, always fighting your darker urges, always choosing better. Some days were easier than others, but you never gave up. Your story became a legend: the fiddler who won the greatest battle—the one against themselves. You proved that lasting change isn't easy, but it's always possible for those willing to fight for it.`,
        isEnding: true,
        endingType: 'victory'
      },

      ending_guided_redemption: {
        id: 'ending_guided_redemption',
        narration: `You approached the wolf and fox humbly. "I don't trust myself," you admitted. "Please guide me. What should I do with the hare?" They were shocked by your humility. The wolf spoke: "Help the hare, but let us watch to keep you accountable." You agreed immediately. With the wolf and fox supervising, you taught the hare beautifully. They corrected you when your old tricks almost surfaced, and praised you when you resisted. Slowly, you learned to act rightly not just alone, but with support. The forest animals created a council of accountability, helping each other become better. You became its first member and biggest advocate. "We all need guidance," you'd say. "Wisdom isn't knowing everything—it's knowing when to ask for help." Your humility in seeking guidance transformed not just you, but created a community of mutual growth. The forest flourished with creatures helping each other overcome their flaws.`,
        isEnding: true,
        endingType: 'guided'
      },

      ending_desperate_honesty: {
        id: 'ending_desperate_honesty',
        narration: `"Please, I need my violin," you begged the hare. "I'll teach you genuinely, I promise. I've made terrible mistakes, but music is all I have." The hare saw your desperation and vulnerability. "Will you teach without tricks?" You nodded vigorously. The hare returned your violin, and you kept your word, teaching patiently and kindly. The trapped wolf and fox were eventually freed by other animals and witnessed your genuine teaching. They approached cautiously. "Desperation brought out your honesty," observed the fox. "It shouldn't take losing something to make you kind," added the wolf, "but at least you found honesty eventually." You acknowledged this painful truth. You spent years making amends, and while the forest never fully forgot your initial cruelty, they respected your desperate pivot toward integrity. You learned that sometimes crisis reveals who we truly want to be, and that's when real change can begin—though it's far better to choose kindness before desperation forces it.`,
        isEnding: true,
        endingType: 'desperate'
      },

      ending_irredeemable: {
        id: 'ending_irredeemable',
        narration: `Even facing the loss of your precious violin, you tried to trick the hare into a trap. But the hare, warned by the freed wolf and fox, saw through your deception immediately. "You've learned nothing," said the hare sadly. "Even losing what you love most doesn't change you." The animals destroyed your violin in front of you. "You used this instrument for cruelty. It deserves better than you," said the wolf. They banned you from the forest, and word spread to every woodland, every village. You became known as the irredeemable fiddler, the one who couldn't change even when given every chance. You wandered alone, trying to make new instruments, but your reputation preceded you. Nobody would teach you, nobody would help you, nobody would trust you. Your absolute refusal to learn from consequences had cost you everything. The saddest truth of all: you had been given countless opportunities to choose differently, and you had squandered every single one. Some people, the forest whispered, choose not to change, and they must live with the emptiness that choice creates.`,
        isEnding: true,
        endingType: 'irredeemable'
      },

      ending_mercy_received: {
        id: 'ending_mercy_received',
        narration: `"I've been cruel and deceptive," you confessed to the hare, tears streaming down your face. "I trapped the wolf for amusement. I don't deserve my violin back, but I'm asking for your mercy." The hare looked at you for a long moment. "The wolf told me what you did before I found your violin. I waited to see what you would do." Your heart sank. "If you had tried to trick me, I would have destroyed it. But you chose truth." The hare returned your violin. "Mercy is for those brave enough to admit their wrongs. Use this second chance wisely." The freed wolf and fox arrived and witnessed this exchange. They were moved by the hare's wisdom and your genuine confession. Together, they offered you a path: use your music to teach others about the importance of honesty and the power of mercy. You became a traveling storyteller, sharing your tale of mistakes and mercy with every village. Your music now carried a message: everyone can fail, but honesty and humility can earn second chances. The forest forgave you, and more importantly, you learned to forgive yourself while never forgetting the importance of your lessons.`,
        isEnding: true,
        endingType: 'mercy'
      },

      ending_accepted_consequence: {
        id: 'ending_accepted_consequence',
        narration: `You looked at the hare holding your violin and made a decision. "Keep it," you said quietly. "I used it to hurt others. I don't deserve it." You turned and walked away from the forest, leaving behind your instrument and your old life. The hare, shocked, called after you, but you kept walking. Days turned to weeks. Without music, you had to find new ways to connect with the world. You helped repair buildings, tended gardens, cared for the sick—using your hands for kindness instead of trickery. Months later, you returned to the edge of the forest, not to reclaim anything, but to thank the animals for teaching you about consequences. The hare approached with your violin. "You've changed," it said. "This belongs to someone who understands that gifts are responsibilities." The wolf and fox agreed. "You accepted consequences without complaint. That's true growth." You took the violin with trembling hands, but this time with wisdom. You played a melody of gratitude, not of cleverness. Accepting consequences had freed you to finally become the person you should have been all along. The forest welcomed you home, not as the clever fiddler, but as the wise one.`,
        isEnding: true,
        endingType: 'consequence'
      }
    }
  }
}