import StatisticsLine from "./StatisticsLine";

const Statistics = ({good, neutral, bad, totalVotes, percentageOfGood, averageScore}) => {
    if(totalVotes == 0){
        return <div><h2>Stats</h2>No feedback given</div>
    }
    return(
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                <StatisticsLine text="Good" value={good} />
                <StatisticsLine text="Neutral" value={neutral} />
                <StatisticsLine text="Bad" value={bad} />
                <StatisticsLine text="Total votes" value={totalVotes} />
                <StatisticsLine text="Average score" value={averageScore} />
                <StatisticsLine text="Percentage of Good" value={`${percentageOfGood} %`} />
                </tbody>
            </table>
        </div>
    );
}

export default Statistics;