const toneAnalyzer = require('./serviceHelper')

const getToneAnalysis = async (text) => {
  return await toneAnalyzer.tone(
    {
      tone_input: text,
      content_type: 'text/plain'
    },
    (err, tone) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(tone, null, 2));
      }
    }
  )
}

module.exports = {
  getToneAnalysis
}

