
export const STORY_DATA = {
  story1: {
    title: "The Four Learned Scholars",
    subtitle: "A Panchatantra Tale of Wisdom",
    scenes: {
      scene1: {
        id: 'scene1',
        narration: `Four Brahmin scholars were walking on a dusty road. They were talking excitedly about their future.

                    The first scholar said proudly,
                    “We know scriptures and magic very well. There is nothing we cannot do.”

                    The second scholar added,
                    “Yes! Kings will invite us to their palaces and respect us for our knowledge.”

                    The third scholar said confidently,
                    “Knowledge is the greatest power. With it, we can change the world.”

                    But you, the wisest among them, warned them gently,
                    “Knowledge is powerful, but wisdom is even more important. Without wisdom, knowledge can cause great harm.”

                    The first scholar laughed and ignored your words.
                    “You always warn us,” he said. “Brave people get success!”`,

        question: "The first scholar says, 'Fortune favors the bold!' How do you respond?",
        choices: [
          {
            id: 'A',
            text: "You're right! Let's use our knowledge fearlessly!",
            preview: "You encourage their reckless confidence. The group becomes more emboldened, dismissing caution entirely.",
            moralImpact: { arrogance: 15, wisdom: -15, humility: -10 },
            nextScene: 'scene2'
          },
          {
            id: 'B',
            text: "Boldness is good, but we must balance it with caution.",
            preview: "You offer a measured perspective. Your friends consider your words, though their excitement remains high.",
            moralImpact: { wisdom: 10, humility: 10, arrogance: -5 },
            nextScene: 'scene2'
          },
          {
            id: 'C',
            text: "Knowledge is powerful, but only when used wisely.",
            preview: "You emphasize wisdom over raw power. Some scholars nod thoughtfully, though others seem impatient.",
            moralImpact: { wisdom: 15, responsibility: 10, humility: 10 },
            nextScene: 'scene2'
          },
          {
            id: 'D',
            text: "Say nothing and continue walking.",
            preview: "You remain silent, avoiding confrontation. The scholars continue their boastful conversation unchecked.",
            moralImpact: {},
            nextScene: 'scene2'
          }
        ]
      },
      scene2: {
        id: 'scene2',
        narration: `As you walked deeper into the forest, you came across the bones of a powerful lion.
                    The eyes of your companions shone with excitement.
                    “Look! This is the perfect chance to show our skills.
                    We will bring this lion back to life!” said the second scholar.
                    “Just imagine how amazed everyone will be!” added the third scholar eagerly.
                    A cold fear slowly passed through your body.`,

        question: "The second scholar suggests reviving the lion. What do you do?",
        choices: [
          {
            id: 'A',
            text: "This is an excellent opportunity! Let's proceed!",
            preview: "You join their enthusiasm, ignoring the obvious danger. The group begins preparations immediately.",
            moralImpact: { arrogance: 15, riskAwareness: -15, wisdom: -10 },
            nextScene: 'scene3'
          },
          {
            id: 'B',
            text: "Wait—reviving a predator is extremely dangerous!",
            preview: "You voice your strong concern about the life-threatening risk. The scholars pause, but their desire to demonstrate their power remains strong.",
            moralImpact: { riskAwareness: 15, wisdom: 15, responsibility: 10 },
            nextScene: 'scene3'
          },
          {
            id: 'C',
            text: "Let me think about the consequences first...",
            preview: "You ask for time to consider. Your cautious approach annoys some, but plants seeds of doubt in others.",
            moralImpact: { wisdom: 10, humility: 10, riskAwareness: 10 },
            nextScene: 'scene3'
          },
          {
            id: 'D',
            text: "Stand aside and let them decide.",
            preview: "You step back, avoiding responsibility. The scholars take your silence as tacit approval.",
            moralImpact: { responsibility: -15 },
            nextScene: 'scene3'
          }
        ]
      },
      scene3: {
        id: 'scene3',
        narration: `The scholars ignored your concerns and began preparing the ritual. The first scholar started chanting ancient verses. "You're being a coward!" one of them mocked. "What use is knowledge if we don't apply it?" The skeletal pieces began to tremble and move together.`,
        question: "They call you a coward. How do you respond?",
        choices: [
          {
            id: 'A',
            text: "Fine! I'll help you revive it to prove I'm not a coward!",
            preview: "Pride takes over. You join the ritual, abandoning your better judgment to save face.",
            moralImpact: { arrogance: 15, wisdom: -15, riskAwareness: -15, humility: -10 },
            nextScene: 'scene4'
          },
          {
            id: 'B',
            text: "I refuse to participate in this madness. I'm climbing that tree!",
            preview: "You reject their mockery and prioritize survival. You quickly move toward the nearest tall tree.",
            moralImpact: { wisdom: 15, riskAwareness: 15, responsibility: 10 },
            nextScene: 'scene4'
          },
          {
            id: 'C',
            text: "Please, reconsider! This will end in tragedy!",
            preview: "You make an emotional appeal, showing genuine care for their safety despite their insults.",
            moralImpact: { empathy: 15, responsibility: 10, wisdom: 10 },
            nextScene: 'scene4'
          },
          {
            id: 'D',
            text: "Say nothing and stay on the ground.",
            preview: "Paralyzed by fear or indecision, you neither help nor save yourself. A dangerous position.",
            moralImpact: { wisdom: -10, riskAwareness: -10 },
            nextScene: 'scene4'
          }
        ]
      },
      scene4: {
        id: 'scene4',
        narration: `The ritual was nearly complete. The lion's skeletal frame was now covered in flesh and fur, appearing as if merely asleep. The third scholar raised his hands dramatically. "And now, the breath of life!" This was your last chance to act.`,
        question: "This is your final moment. What do you do?",
        choices: [
          {
            id: 'A',
            text: "Join them in the spell to show solidarity.",
            preview: "You abandon wisdom entirely, choosing loyalty over survival. A fatal mistake.",
            moralImpact: { arrogance: 15, riskAwareness: -15, wisdom: -15 },
            nextScene: 'ending_death'
          },
          {
            id: 'B',
            text: "Climb the tree immediately to save yourself.",
            preview: "You act decisively to preserve your life, though it means watching your friends face danger.",
            moralImpact: { riskAwareness: 15, wisdom: 15, responsibility: 10 },
            nextScene: 'ending_survival'
          },
          {
            id: 'C',
            text: "Make one final desperate plea to stop them.",
            preview: "You try one last time to save everyone. Whether they listen depends on your previous influence.",
            moralImpact: { empathy: 15, responsibility: 15, duty: 10 },
            nextScene: 'ending_conditional'
          },
          {
            id: 'D',
            text: "Freeze in fear and do nothing.",
            preview: "Terror paralyzes you. You can neither flee nor intervene. A fatal inaction.",
            moralImpact: { riskAwareness: -15, responsibility: -15 },
            nextScene: 'ending_death'
          }
        ]
      },
      ending_survival: {
        id: 'ending_survival',
        narration: `You quickly climbed the tall tree, your hands scraping against the rough bark. Below, the final spell was cast. The lion's eyes snapped open, and it let out a deafening roar. Horror replaced the scholars' excitement as the beast sprang to life. "By the gods…" whispered the first scholar, his voice trembling. Before they could react, the lion pounced. Their terrified screams echoed through the forest before falling silent. From your perch, you watched in deep sorrow. Tears streamed down your face as you witnessed the terrible cost of their arrogance. After the lion departed, you descended slowly and cast a final glance at your fallen friends. "Knowledge without wisdom is a sword without a hilt—deadly to the one who wields it," you murmured, walking away with a lesson learned at a terrible price.`,
        isEnding: true,
        endingType: 'survival'
      },
      ending_death: {
        id: 'ending_death',
        narration: `The final spell was cast, and the lion's eyes blazed with life. It rose with a thunderous roar, its predatory instincts immediately taking over. You stood frozen with your companions, realizing too late the magnitude of your mistake. "What have we done?" someone whispered. The lion's gaze fixed on you all—easy prey. Your screams joined those of your friends as the beast attacked. In your final moments, you understood the truth you had ignored: knowledge without wisdom leads not to glory, but to destruction. The forest fell silent once more, claiming four more victims of arrogance.`,
        isEnding: true,
        endingType: 'death'
      },
      ending_conditional: {
        id: 'ending_conditional',
        narration: `"STOP! I BEG YOU!" you cried out with every ounce of passion. "Our knowledge was meant to serve life, not to play with death! Is proving our power worth our lives?" Your words rang through the clearing. The third scholar's hands trembled, the spell incomplete. For a moment, time seemed to stop. Then, slowly, he lowered his hands. "Perhaps... perhaps you are right," he said quietly. The others looked ashamed. The assembled lion remained lifeless—a reminder of what could have been. You all stood in silence, then quietly left the forest together, humbled and alive. On the journey home, the first scholar spoke: "Today, you saved us all. Forgive our arrogance." You nodded. "Knowledge without wisdom is dangerous. But wisdom can still guide us—if we let it." The four of you walked on, forever changed by what you almost unleashed.`,
        isEnding: true,
        endingType: 'prevention'
      }
    }
  }
};
