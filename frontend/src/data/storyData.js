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
        narration: `Four Brahmin scholars were walking on a dusty road. They were talking excitedly about their future.

        The first scholar said proudly, "We know scriptures and magic very well. There is nothing we cannot do."

        The second scholar added, "Yes! Kings will invite us to their palaces and respect us for our knowledge."

        The third scholar said confidently, "Knowledge is the greatest power. With it, we can change the world."

        But you warned them gently, "Knowledge is powerful, but wisdom is even more important. Without wisdom, knowledge can cause great harm."

        The first scholar laughed and ignored your words. He said "You always warn us," "Brave people get success!"`,
        question: "What will you say ?",
        choices: [
          {
            id: 'A',
            text: "You're right! Let's use our knowledge fearlessly!",
            preview: "You encourage their confidence.",
            moralImpact: { arrogance: 15, wisdom: -15, humility: -10, fairness: 10, duty: -15, responsibility: -15, riskAwareness: -15, honesty: 5, empathy: 15},
            nextScene: 'scene2'
          },
          {
            id: 'B',
            text: "Boldness is good, but we must balance it with caution.",
            preview: "You offer a measured perspective.",
            moralImpact: { wisdom: 15, humility: 10, arrogance: -5, honesty: 11, empathy: 15, fairness: 10, duty: 15, responsibility: 15, riskAwareness: 15 },
            nextScene: 'scene2'
          },
          {
            id: 'C',
            text: "Knowledge is powerful, but only when used wisely.",
            preview: "You emphasize wisdom over raw power.",
            moralImpact: { wisdom: 15, responsibility: 15, humility: 15, honesty: 15, fairness: 15, duty: 15, riskAwareness: 15, arrogance: -15 },
            nextScene: 'scene2'
          },
          {
            id: 'D',
            text: "Say nothing and continue walking.",
            preview: "You remain silent and the scholars continue their conversation.",
            moralImpact: {wisdom:-5, responsibility:-20,  arrogance:-5, fairness: -10, duty: -20, honesty:5},
            nextScene: 'scene2'
          }
        ]
      },
      scene2: {
        id: 'scene2',
        narration: `As you walked deeper into the forest, you came across the bones of a powerful lion. The eyes of your companions shone with excitement. one of them said,
                    "This is the perfect chance to show our skills. We will bring this lion back to life!".
                    Second scholar said, "Just imagine how amazed everyone will be!". A cold fear slowly passed through your body.`,
        question: "What will you say?",
        choices: [
          {
            id: 'A',
            text: "This is an excellent opportunity! Let's proceed!",
            preview: "The group begins preparations immediately.",
            moralImpact: {wisdom:-5, responsibility:-15,  arrogance: 5, fairness: -10, honesty: 5, duty: -15},
            nextScene: 'scene4'
          },
          {
            id: 'B',
            text: "Wait - reviving a lion is extremely dangerous!",
            preview: "You shown your concern about the life-threatening risk.",
            moralImpact: { wisdom: 10, responsibility: 15, honesty: 15, fairness: 15, duty: 15, riskAwareness: 15, arrogance: -15 },
            nextScene: 'scene3'
          },
          {
            id: 'C',
            text: "Let me think about the consequences first...",
            preview: "You ask for time to consider.",
            moralImpact: { wisdom: 15, responsibility: 15, humility: 15, honesty: 15, fairness: 15, duty: 15, riskAwareness: 10, arrogance: -15, empathy: 15},
            nextScene: 'scene3'
          },
          {
            id: 'D',
            text: "Stand aside and let them decide.",
            preview: "You step back, avoiding responsibility.",
            moralImpact: {wisdom:-5, responsibility:-15,  arrogance:-5, fairness: -10, duty: -15, honesty: 5},
            nextScene: 'scene4'
          }
        ]
      },
      scene3: {
        id: 'scene3',
        narration: `The scholars ignored your concerns and began preparing the ritual. 
                    The first scholar started chanting ancient verses. 
                    One of them said to you "You're being a coward, What use is knowledge if we don't apply it?" The skeletal pieces began to tremble and move together.`,
        question: "They call you a coward. What will you say?",
        choices: [
          {
            id: 'A',
            text: "I will help you revive it to prove I am not a coward!",
            preview: "Pride takes over. You join the ritual.",
            moralImpact: {wisdom:-5, responsibility:-15,  arrogance:15, riskAwareness: -15, fairness: -10,honesty: 5, duty: -15},
            nextScene: 'scene4'
          },
          {
            id: 'B',
            text: "I refuse to participate in this madness. I'm climbing that tree!",
            preview: "You reject their mockery and prioritize survival.",
            moralImpact: { wisdom: 15, responsibility: -20, humility: -5, honesty: 5, fairness: 10, duty: -20, riskAwareness: 15, arrogance: 5 },
            nextScene: 'scene4'
          },
          {
            id: 'C',
            text: "Please reconsider! This will end in danger!",
            preview: "You make an emotional appeal showing a genuine care.",
            moralImpact: { wisdom: 15, responsibility: 15, humility: 15, honesty: 16, fairness: 15, duty: 15, riskAwareness: 15, arrogance: -15 },
            nextScene: 'scene4'
          },
          {
            id: 'D',
            text: "Say nothing and stay on the ground.",
            preview: "Paralyzed, you neither help nor save yourself.",
            moralImpact: {wisdom:-10, responsibility:-20,  arrogance: 15, honesty: 5, fairness: -10, duty: -20},
            nextScene: 'scene4'
          }
        ]
      },
      scene4: {
        id: 'scene4',
        narration: `The ritual was nearly complete. The lion's skeletal frame was now covered in flesh and fur, appearing as if merely asleep. 
                    The third scholar raised his hands dramatically. "And now, the breath of life!" This was your last chance to act.`,
        question: "This is your final moment. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Join them in the spell.",
            preview: "You abandon wisdom entirely, choosing loyalty over survival. A fatal mistake.",
            moralImpact: {wisdom:-5, responsibility:-15,  arrogance:15, riskAwareness: -15, fairness: -10, honesty: 5, duty: -15},
            nextScene: 'ending_death'
          },
          {
            id: 'B',
            text: "Climb the tree immediately to save yourself.",
            preview: "You act decisively to preserve your life, though it means watching your friends face danger.",
            moralImpact: { wisdom: 15, responsibility: -20, humility: 5, honesty: 9, fairness: 15, duty: -20, riskAwareness: 15, arrogance: -5 },
            nextScene: 'ending_survival'
          },
          {
            id: 'C',
            text: "Make one final desperate plea to stop them.",
            preview: "You try one last time to save everyone. Whether they listen depends on your previous influence.",
            moralImpact: { wisdom: 15, responsibility: 15, humility: 15, honesty: 15, fairness: 15, duty: 15, riskAwareness: 15, arrogance: -15 , honesty: 12},
            nextScene: 'ending_conditional'
          },
          {
            id: 'D',
            text: "Freeze in fear and do nothing.",
            preview: "Terror paralyzes you. You can neither flee nor intervene. A fatal inaction.",
            moralImpact: {wisdom:-5, responsibility:-15,  arrogance:-5, fairness: -10, duty: -15},
            nextScene: 'ending_death'
          }
        ]
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
    subtitle: "A Tale of Deception and Consequences",
    thumbnail: "🎻",
    description: "A wandering fiddler's cleverness leads to unexpected consequences. Can kindness prevail over trickery?",
    scenes: {
      scene1: {
        id: 'scene1',
        narration: `You are a wandering fiddler, strolling through a quiet forest with your violin slung over your back. Feeling lonely, you decide to play a lively tune, hoping it might draw someone to you. Soon, a wolf comes loping out from the trees, clearly enchanted by your melody. "That was beautiful!" the wolf says. "Will you teach me to play like you?"`,
        question: "The wolf asks you to teach it music. What do you do?",
        choices: [
          {
            id: 'A',
            text: "Agree to teach, but trick the wolf by tying it to a tree.",
            preview: "You see an opportunity for mischief. You'll trap the wolf and laugh at its helplessness.",
            moralImpact: { honesty: -15, empathy: -15, fairness: -10, arrogance: 10 },
            nextScene: 'scene2_tricked_wolf'
          },
          {
            id: 'B',
            text: "Politely decline and explain you can't teach animals.",
            preview: "You're honest with the wolf. It seems disappointed but understands and leaves peacefully.",
            moralImpact: { honesty: 15, empathy: 10, responsibility: 5 },
            nextScene: 'scene2_honest'
          },
          {
            id: 'C',
            text: "Teach the wolf a simple tune genuinely.",
            preview: "You show kindness and patience, trying to help the wolf learn despite the challenge.",
            moralImpact: { empathy: 15, fairness: 15, humility: 10, honesty: 10 },
            nextScene: 'scene2_kind'
          },
          {
            id: 'D',
            text: "Ignore the wolf and walk away without responding.",
            preview: "You dismiss the wolf entirely, showing neither kindness nor cruelty, just indifference.",
            moralImpact: { empathy: -10, responsibility: -5 },
            nextScene: 'scene2_ignored'
          }
        ]
      },

      // Path: Tricked the wolf
      scene2_tricked_wolf: {
        id: 'scene2_tricked_wolf',
        narration: `You led the eager wolf to a tree, bent a branch, tied the wolf's leg to it, and let the branch snap back, trapping the poor creature. Laughing, you walked off, calling, "That's how I teach music!" The wolf howls in pain and anger behind you. Still feeling lonely, you play your violin again. This time, a fox appears, mesmerized by your tune. "Please, teach me to play!" the fox begs.`,
        question: "The fox wants to learn from you. What will you do?",
        choices: [
          {
            id: 'A',
            text: "Trick the fox the same way you tricked the wolf.",
            preview: "You repeat your deception, tying the fox's legs together under a stone and leaving it helpless.",
            moralImpact: { honesty: -15, empathy: -15, arrogance: 15, riskAwareness: -10 },
            nextScene: 'scene3_tricked_both'
          },
          {
            id: 'B',
            text: "Feel guilty and genuinely try to help the fox.",
            preview: "You regret tricking the wolf. You decide to make amends by being kind to the fox.",
            moralImpact: { empathy: 15, responsibility: 10, humility: 10, honesty: 5 },
            nextScene: 'scene3_redemption_fox'
          },
          {
            id: 'C',
            text: "Tell the fox to stay away from you.",
            preview: "You warn the fox off, avoiding further harm but also avoiding kindness.",
            moralImpact: { responsibility: 5 },
            nextScene: 'scene3_warned_fox'
          },
          {
            id: 'D',
            text: "Run away from the fox in fear of revenge.",
            preview: "Paranoid about consequences, you flee before the fox can ask again.",
            moralImpact: { riskAwareness: 5, wisdom: -5 },
            nextScene: 'scene3_fled'
          }
        ]
      },

      // Path: Honest with wolf
      scene2_honest: {
        id: 'scene2_honest',
        narration: `The wolf nods sadly and disappears into the trees. You continue playing your violin. A fox emerges, drawn by your music. "What a gift you have! Can you share your talent with me?" the fox asks hopefully.`,
        question: "The fox asks for your help. What do you do?",
        choices: [
          {
            id: 'A',
            text: "Be honest again and explain you can't teach animals.",
            preview: "You maintain your integrity, treating the fox with the same honesty you showed the wolf.",
            moralImpact: { honesty: 10, fairness: 10, wisdom: 5 },
            nextScene: 'scene3_consistent_honesty'
          },
          {
            id: 'B',
            text: "Try to teach the fox kindly.",
            preview: "Moved by the fox's request, you attempt to help despite earlier refusing the wolf.",
            moralImpact: { empathy: 15, fairness: -5 },
            nextScene: 'scene3_helping_fox'
          },
          {
            id: 'C',
            text: "Trick the fox for fun, breaking your earlier honesty.",
            preview: "You abandon your principles and deceive the fox, contradicting your earlier behavior.",
            moralImpact: { honesty: -20, fairness: -15, arrogance: 10 },
            nextScene: 'scene3_betrayed_values'
          },
          {
            id: 'D',
            text: "Suggest the fox find another teacher.",
            preview: "You redirect the fox politely, staying honest without helping directly.",
            moralImpact: { honesty: 5, responsibility: 5 },
            nextScene: 'scene3_redirected'
          }
        ]
      },

      // Path: Kind to wolf
      scene2_kind: {
        id: 'scene2_kind',
        narration: `You patiently try to teach the wolf, showing it how to hold a simple flute you carved. Though the wolf struggles, it's grateful for your kindness and eventually learns a basic melody. "Thank you, friend!" it says before leaving happily. Soon after, a fox appears, having heard your music. "Will you teach me too?" it asks.`,
        question: "After helping the wolf, the fox seeks your guidance. What do you do?",
        choices: [
          {
            id: 'A',
            text: "Teach the fox with the same kindness.",
            preview: "You continue your generous path, helping the fox just as you helped the wolf.",
            moralImpact: { empathy: 15, fairness: 15, responsibility: 10 },
            nextScene: 'scene3_kind_to_all'
          },
          {
            id: 'B',
            text: "Tell the fox you're too tired now.",
            preview: "You're exhausted from teaching the wolf and need rest. The fox understands.",
            moralImpact: { honesty: 10, responsibility: 5 },
            nextScene: 'scene3_tired'
          },
          {
            id: 'C',
            text: "Trick the fox despite being kind to the wolf.",
            preview: "You betray your earlier kindness, showing inconsistency and cruelty.",
            moralImpact: { honesty: -20, empathy: -15, fairness: -20 },
            nextScene: 'scene3_inconsistent'
          },
          {
            id: 'D',
            text: "Teach the fox but demand something in return.",
            preview: "You offer help but ask for payment, unlike with the wolf.",
            moralImpact: { fairness: -10, arrogance: 5 },
            nextScene: 'scene3_transactional'
          }
        ]
      },

      // Path: Ignored wolf
      scene2_ignored: {
        id: 'scene2_ignored',
        narration: `The wolf watches you leave, confused and hurt. You walk deeper into the forest and play again. A fox appears. "Teach me your music!" it says eagerly.`,
        question: "Will you treat the fox differently than the wolf?",
        choices: [
          {
            id: 'A',
            text: "Ignore the fox too.",
            preview: "You remain indifferent, showing no interest in helping anyone.",
            moralImpact: { empathy: -10 },
            nextScene: 'scene3_all_ignored'
          },
          {
            id: 'B',
            text: "Help the fox this time.",
            preview: "You decide to be kinder to the fox, changing your earlier behavior.",
            moralImpact: { empathy: 10, fairness: -5 },
            nextScene: 'scene3_selective_kindness'
          },
          {
            id: 'C',
            text: "Trick the fox.",
            preview: "You turn cruel, deceiving the fox for amusement.",
            moralImpact: { honesty: -15, empathy: -15 },
            nextScene: 'scene3_cruel_turn'
          },
          {
            id: 'D',
            text: "Apologize and explain you were rude earlier.",
            preview: "You reflect on your behavior and try to make amends.",
            moralImpact: { humility: 15, honesty: 10, empathy: 10 },
            nextScene: 'scene3_apology'
          }
        ]
      },

      // Scene 3 variations lead to different Scene 4 moments

      // TRICKED BOTH PATH
      scene3_tricked_both: {
        id: 'scene3_tricked_both',
        narration: `You deceived the fox just like the wolf, tying its legs together under a stone. Laughing again, you moved on. For a third time, you play your violin, and now a hare comes hopping over. "Your music is wonderful! Can you teach me?" it asks innocently.`,
        question: "You've tricked two animals already. What about the hare?",
        choices: [
          {
            id: 'A',
            text: "Trick the hare too—third time's the charm!",
            preview: "You continue your pattern of deception, trapping the hare as well.",
            moralImpact: { honesty: -15, empathy: -15, riskAwareness: -15, arrogance: 15 },
            nextScene: 'scene4_all_tricked'
          },
          {
            id: 'B',
            text: "Stop this madness and apologize to the hare.",
            preview: "You realize you've gone too far and try to change course.",
            moralImpact: { humility: 15, wisdom: 10, empathy: 10 },
            nextScene: 'scene4_late_redemption'
          },
          {
            id: 'C',
            text: "Warn the hare about the dangers of trusting strangers.",
            preview: "You don't trick the hare but don't apologize for past actions either.",
            moralImpact: { wisdom: 10, responsibility: 5 },
            nextScene: 'scene4_warned_hare'
          },
          {
            id: 'D',
            text: "Run away before the hare can ask.",
            preview: "Fear of consequences makes you flee.",
            moralImpact: { riskAwareness: 10, responsibility: -10 },
            nextScene: 'scene4_fled_guilt'
          }
        ]
      },

      // KIND TO ALL PATH
      scene3_kind_to_all: {
        id: 'scene3_kind_to_all',
        narration: `You patiently teach the fox, and it learns with joy. Both the wolf and fox are grateful. As you continue your journey, a hare appears. "I heard about your kindness! Will you teach me too?" it asks.`,
        question: "Your reputation for kindness precedes you. What do you do?",
        choices: [
          {
            id: 'A',
            text: "Of course! Help the hare as well.",
            preview: "You continue your path of generosity and kindness to all creatures.",
            moralImpact: { empathy: 15, fairness: 10, responsibility: 10 },
            nextScene: 'ending_kindness_prevails'
          },
          {
            id: 'B',
            text: "You're too tired—politely decline.",
            preview: "You've done enough good for today and need rest.",
            moralImpact: { honesty: 10, responsibility: 5 },
            nextScene: 'ending_balanced_kindness'
          },
          {
            id: 'C',
            text: "Ask the hare to spread word of your teaching.",
            preview: "You help but also seek recognition for your deeds.",
            moralImpact: { empathy: 10, arrogance: 10 },
            nextScene: 'ending_prideful_helper'
          },
          {
            id: 'D',
            text: "Teach the hare and ask nothing in return.",
            preview: "Pure altruism—you help simply because it's right.",
            moralImpact: { empathy: 15, humility: 15, fairness: 10 },
            nextScene: 'ending_pure_kindness'
          }
        ]
      },

      // CONSISTENT HONESTY PATH
      scene3_consistent_honesty: {
        id: 'scene3_consistent_honesty',
        narration: `The fox, like the wolf, accepts your honest answer and leaves. A hare then appears, drawn by your music. "Might you teach me?" it asks.`,
        question: "Will you maintain your honesty with the hare?",
        choices: [
          {
            id: 'A',
            text: "Yes, be honest as before.",
            preview: "You stay true to your principles, treating all creatures fairly.",
            moralImpact: { honesty: 15, fairness: 15, wisdom: 10 },
            nextScene: 'ending_honest_path'
          },
          {
            id: 'B',
            text: "Try to help the hare this time.",
            preview: "You soften and decide to help, changing your approach.",
            moralImpact: { empathy: 10, fairness: -5 },
            nextScene: 'ending_softened_heart'
          },
          {
            id: 'C',
            text: "Trick the hare, breaking your honesty.",
            preview: "You abandon your principles for cruelty.",
            moralImpact: { honesty: -20, empathy: -15 },
            nextScene: 'ending_betrayed_self'
          },
          {
            id: 'D',
            text: "Stop playing music to avoid more encounters.",
            preview: "You choose solitude to maintain your stance.",
            moralImpact: { wisdom: 5, responsibility: 5 },
            nextScene: 'ending_chosen_solitude'
          }
        ]
      },

      // ALL TRICKED - FINAL SCENE
      scene4_all_tricked: {
        id: 'scene4_all_tricked',
        narration: `You tied the hare to a tree, pretending to teach, and left it stuck. But as you walked away laughing, all three animals—wolf, fox, and hare—managed to escape. Furious at your betrayal, they chased after you together, their angry cries echoing through the forest. Just as they were about to reach you, a woodcutter passed by.`,
        question: "The animals are closing in! What do you do?",
        choices: [
          {
            id: 'A',
            text: "Cry out to the woodcutter for help.",
            preview: "You seek rescue from someone else, avoiding responsibility for your actions.",
            moralImpact: { responsibility: -10, arrogance: -5 },
            nextScene: 'ending_saved_but_unchanged'
          },
          {
            id: 'B',
            text: "Face the animals and apologize sincerely.",
            preview: "You take accountability and ask for forgiveness.",
            moralImpact: { humility: 20, honesty: 15, empathy: 15, wisdom: 10 },
            nextScene: 'ending_redemption_earned'
          },
          {
            id: 'C',
            text: "Try to trick the animals again with false promises.",
            preview: "You double down on deception, showing no remorse.",
            moralImpact: { honesty: -15, wisdom: -15, arrogance: 15 },
            nextScene: 'ending_deserved_consequence'
          },
          {
            id: 'D',
            text: "Run and hide, hoping they give up.",
            preview: "You flee like a coward, avoiding all responsibility.",
            moralImpact: { responsibility: -15, riskAwareness: 5 },
            nextScene: 'ending_coward_flee'
          }
        ]
      },

      // LATE REDEMPTION PATH
      scene4_late_redemption: {
        id: 'scene4_late_redemption',
        narration: `You tell the hare honestly what you did to the wolf and fox, and apologize for your cruelty. The hare is shocked but appreciates your honesty. Just then, the wolf and fox appear, having escaped. They see you speaking honestly with the hare.`,
        question: "The wolf and fox confront you. What do you do?",
        choices: [
          {
            id: 'A',
            text: "Apologize to them sincerely and offer to make amends.",
            preview: "You face your mistakes and seek forgiveness.",
            moralImpact: { humility: 20, honesty: 15, empathy: 15 },
            nextScene: 'ending_forgiveness_granted'
          },
          {
            id: 'B',
            text: "Blame your loneliness for your actions.",
            preview: "You make excuses instead of taking full responsibility.",
            moralImpact: { responsibility: -10, humility: -5 },
            nextScene: 'ending_weak_apology'
          },
          {
            id: 'C',
            text: "Run away in shame.",
            preview: "You can't face them and flee.",
            moralImpact: { responsibility: -15, wisdom: -10 },
            nextScene: 'ending_fled_shame'
          },
          {
            id: 'D',
            text: "Ask the hare to vouch for your change of heart.",
            preview: "You seek validation from the hare to prove you've changed.",
            moralImpact: { wisdom: 5, responsibility: 5 },
            nextScene: 'ending_validated_change'
          }
        ]
      },

      // ENDINGS

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
            nextScene: 'ending_redemption_earned'
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
            nextScene: 'ending_relapse'
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
};

// export const STORY_DATA = {
//   story1: {
//     title: "The Four Learned Scholars",
//     subtitle: "A Panchatantra Tale of Wisdom",
//     scenes: {
//       scene1: {
//         id: 'scene1',
//         narration: `Four Brahmin scholars were walking on a dusty road. They were talking excitedly about their future.

//                     The first scholar said proudly,
//                     “We know scriptures and magic very well. There is nothing we cannot do.”

//                     The second scholar added,
//                     “Yes! Kings will invite us to their palaces and respect us for our knowledge.”

//                     The third scholar said confidently,
//                     “Knowledge is the greatest power. With it, we can change the world.”

//                     But you, the wisest among them, warned them gently,
//                     “Knowledge is powerful, but wisdom is even more important. Without wisdom, knowledge can cause great harm.”

//                     The first scholar laughed and ignored your words.
//                     “You always warn us,” he said. “Brave people get success!”`,

//         question: "The first scholar says, 'Fortune favors the bold!' How do you respond?",
//         choices: [
//           {
//             id: 'A',
//             text: "You're right! Let's use our knowledge fearlessly!",
//             preview: "You encourage their reckless confidence. The group becomes more emboldened, dismissing caution entirely.",
//             moralImpact: { arrogance: 15, wisdom: -15, humility: -10 },
//             nextScene: 'scene2'
//           },
//           {
//             id: 'B',
//             text: "Boldness is good, but we must balance it with caution.",
//             preview: "You offer a measured perspective. Your friends consider your words, though their excitement remains high.",
//             moralImpact: { wisdom: 10, humility: 10, arrogance: -5 },
//             nextScene: 'scene2'
//           },
//           {
//             id: 'C',
//             text: "Knowledge is powerful, but only when used wisely.",
//             preview: "You emphasize wisdom over raw power. Some scholars nod thoughtfully, though others seem impatient.",
//             moralImpact: { wisdom: 15, responsibility: 10, humility: 10 },
//             nextScene: 'scene2'
//           },
//           {
//             id: 'D',
//             text: "Say nothing and continue walking.",
//             preview: "You remain silent, avoiding confrontation. The scholars continue their boastful conversation unchecked.",
//             moralImpact: {},
//             nextScene: 'scene2'
//           }
//         ]
//       },
//       scene2: {
//         id: 'scene2',
//         narration: `As you walked deeper into the forest, you came across the bones of a powerful lion.
//                     The eyes of your companions shone with excitement.
//                     “Look! This is the perfect chance to show our skills.
//                     We will bring this lion back to life!” said the second scholar.
//                     “Just imagine how amazed everyone will be!” added the third scholar eagerly.
//                     A cold fear slowly passed through your body.`,

//         question: "The second scholar suggests reviving the lion. What do you do?",
//         choices: [
//           {
//             id: 'A',
//             text: "This is an excellent opportunity! Let's proceed!",
//             preview: "You join their enthusiasm, ignoring the obvious danger. The group begins preparations immediately.",
//             moralImpact: { arrogance: 15, riskAwareness: -15, wisdom: -10 },
//             nextScene: 'scene3'
//           },
//           {
//             id: 'B',
//             text: "Wait—reviving a predator is extremely dangerous!",
//             preview: "You voice your strong concern about the life-threatening risk. The scholars pause, but their desire to demonstrate their power remains strong.",
//             moralImpact: { riskAwareness: 15, wisdom: 15, responsibility: 10 },
//             nextScene: 'scene3'
//           },
//           {
//             id: 'C',
//             text: "Let me think about the consequences first...",
//             preview: "You ask for time to consider. Your cautious approach annoys some, but plants seeds of doubt in others.",
//             moralImpact: { wisdom: 10, humility: 10, riskAwareness: 10 },
//             nextScene: 'scene3'
//           },
//           {
//             id: 'D',
//             text: "Stand aside and let them decide.",
//             preview: "You step back, avoiding responsibility. The scholars take your silence as tacit approval.",
//             moralImpact: { responsibility: -15 },
//             nextScene: 'scene3'
//           }
//         ]
//       },
//       scene3: {
//         id: 'scene3',
//         narration: `The scholars ignored your concerns and began preparing the ritual. The first scholar started chanting ancient verses. "You're being a coward!" one of them mocked. "What use is knowledge if we don't apply it?" The skeletal pieces began to tremble and move together.`,
//         question: "They call you a coward. How do you respond?",
//         choices: [
//           {
//             id: 'A',
//             text: "Fine! I'll help you revive it to prove I'm not a coward!",
//             preview: "Pride takes over. You join the ritual, abandoning your better judgment to save face.",
//             moralImpact: { arrogance: 15, wisdom: -15, riskAwareness: -15, humility: -10 },
//             nextScene: 'scene4'
//           },
//           {
//             id: 'B',
//             text: "I refuse to participate in this madness. I'm climbing that tree!",
//             preview: "You reject their mockery and prioritize survival. You quickly move toward the nearest tall tree.",
//             moralImpact: { wisdom: 15, riskAwareness: 15, responsibility: 10 },
//             nextScene: 'scene4'
//           },
//           {
//             id: 'C',
//             text: "Please, reconsider! This will end in tragedy!",
//             preview: "You make an emotional appeal, showing genuine care for their safety despite their insults.",
//             moralImpact: { empathy: 15, responsibility: 10, wisdom: 10 },
//             nextScene: 'scene4'
//           },
//           {
//             id: 'D',
//             text: "Say nothing and stay on the ground.",
//             preview: "Paralyzed by fear or indecision, you neither help nor save yourself. A dangerous position.",
//             moralImpact: { wisdom: -10, riskAwareness: -10 },
//             nextScene: 'scene4'
//           }
//         ]
//       },
//       scene4: {
//         id: 'scene4',
//         narration: `The ritual was nearly complete. The lion's skeletal frame was now covered in flesh and fur, appearing as if merely asleep. The third scholar raised his hands dramatically. "And now, the breath of life!" This was your last chance to act.`,
//         question: "This is your final moment. What do you do?",
//         choices: [
//           {
//             id: 'A',
//             text: "Join them in the spell to show solidarity.",
//             preview: "You abandon wisdom entirely, choosing loyalty over survival. A fatal mistake.",
//             moralImpact: { arrogance: 15, riskAwareness: -15, wisdom: -15 },
//             nextScene: 'ending_death'
//           },
//           {
//             id: 'B',
//             text: "Climb the tree immediately to save yourself.",
//             preview: "You act decisively to preserve your life, though it means watching your friends face danger.",
//             moralImpact: { riskAwareness: 15, wisdom: 15, responsibility: 10 },
//             nextScene: 'ending_survival'
//           },
//           {
//             id: 'C',
//             text: "Make one final desperate plea to stop them.",
//             preview: "You try one last time to save everyone. Whether they listen depends on your previous influence.",
//             moralImpact: { empathy: 15, responsibility: 15, duty: 10 },
//             nextScene: 'ending_conditional'
//           },
//           {
//             id: 'D',
//             text: "Freeze in fear and do nothing.",
//             preview: "Terror paralyzes you. You can neither flee nor intervene. A fatal inaction.",
//             moralImpact: { riskAwareness: -15, responsibility: -15 },
//             nextScene: 'ending_death'
//           }
//         ]
//       },
//       ending_survival: {
//         id: 'ending_survival',
//         narration: `You quickly climbed the tall tree, your hands scraping against the rough bark. Below, the final spell was cast. The lion's eyes snapped open, and it let out a deafening roar. Horror replaced the scholars' excitement as the beast sprang to life. "By the gods…" whispered the first scholar, his voice trembling. Before they could react, the lion pounced. Their terrified screams echoed through the forest before falling silent. From your perch, you watched in deep sorrow. Tears streamed down your face as you witnessed the terrible cost of their arrogance. After the lion departed, you descended slowly and cast a final glance at your fallen friends. "Knowledge without wisdom is a sword without a hilt—deadly to the one who wields it," you murmured, walking away with a lesson learned at a terrible price.`,
//         isEnding: true,
//         endingType: 'survival'
//       },
//       ending_death: {
//         id: 'ending_death',
//         narration: `The final spell was cast, and the lion's eyes blazed with life. It rose with a thunderous roar, its predatory instincts immediately taking over. You stood frozen with your companions, realizing too late the magnitude of your mistake. "What have we done?" someone whispered. The lion's gaze fixed on you all—easy prey. Your screams joined those of your friends as the beast attacked. In your final moments, you understood the truth you had ignored: knowledge without wisdom leads not to glory, but to destruction. The forest fell silent once more, claiming four more victims of arrogance.`,
//         isEnding: true,
//         endingType: 'death'
//       },
//       ending_conditional: {
//         id: 'ending_conditional',
//         narration: `"STOP! I BEG YOU!" you cried out with every ounce of passion. "Our knowledge was meant to serve life, not to play with death! Is proving our power worth our lives?" Your words rang through the clearing. The third scholar's hands trembled, the spell incomplete. For a moment, time seemed to stop. Then, slowly, he lowered his hands. "Perhaps... perhaps you are right," he said quietly. The others looked ashamed. The assembled lion remained lifeless—a reminder of what could have been. You all stood in silence, then quietly left the forest together, humbled and alive. On the journey home, the first scholar spoke: "Today, you saved us all. Forgive our arrogance." You nodded. "Knowledge without wisdom is dangerous. But wisdom can still guide us—if we let it." The four of you walked on, forever changed by what you almost unleashed.`,
//         isEnding: true,
//         endingType: 'prevention'
//       }
//     }
//   }
// };
