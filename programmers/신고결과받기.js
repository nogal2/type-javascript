function solution(id_list, report, k) {
  let answer = new Array(id_list.length);
  answer.fill(0);

  const reported = {};

  id_list.map((user) => {
    reported[user] = [];
  });

  report.map((user) => {
    const [userId, reportId] = user.split(" ");
    if (!reported[reportId].includes(userId)) {
      reported[reportId].push(userId);
    }
  });

  for (const key in reported) {
    if (reported[key] >= k) {
      reported.map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
}
