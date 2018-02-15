const toneAnalyzer = require('./serviceHelper')

function getToneAnalysis (text) {
  return toneAnalyzer.tone(
    {
      tone_input: text,
      content_type: 'text/plain'
    },
    function(err, tone) {
      if (err) {
        console.log(err);
      } else {
        return JSON.stringify(tone, null, 2);
      }
    }
  )
}

module.exports = {
  getToneAnalysis
}

