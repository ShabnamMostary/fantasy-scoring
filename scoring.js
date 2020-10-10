function calculateScore(player) {
  var passing = player.stats.passing
  var rushing = player.stats.rushing
  var receiving = player.stats.receiving
  var plreturn = player.stats.return
  var score = 0


  if (player.position === 'QB') {
    score = (passing.yards / 25) + (passing.touchdowns * 6) -
      (passing.interceptions * 3) +
      (rushing.yards / 10) + (rushing.touchdowns * 6) -
      (rushing.fumbles * 3)

    return score
  } else if (player.position === 'RB' || player.position === 'WR') {
    score = (rushing.yards / 10) + (rushing.touchdowns * 6) -
      (rushing.fumbles * 3) + (receiving.yards / 10) +
      (receiving.touchdowns * 6) + (receiving.receptions) -
      (receiving.fumbles * 3) + (plreturn.kickreturn.yards / 15) +
      (plreturn.kickreturn.touchdowns * 6) - (plreturn.kickreturn.fumbles * 3) +
      (plreturn.puntreturn.yards / 15) + (plreturn.puntreturn.touchdowns * 6) -
      (plreturn.puntreturn.fumbles * 3)

    return score
  } else if (player.position === 'TE') {
    score = (receiving.receptions) +
      (receiving.yards / 10) + (receiving.touchdowns * 6) -
      (receiving.fumbles * 3)

    return score
  } else {
    return score
  }
}

module.exports = calculateScore

