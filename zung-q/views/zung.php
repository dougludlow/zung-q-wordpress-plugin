<div ng-app="ZungApp" ng-controller="ZungController" ng-cloak="" class="zung ng-cloak">
    <div class="page-header">
        <h1>Zung Self-Rating Depression Scale</h1>
    </div>
    <table class="table table-striped table-hover table-responsive">
        <thead>
            <tr>
                <th colspan="2">Check the appropriate column</th>
                <th ng-repeat="response in responses" class="response">{{response}}</th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="s in survey">
                <th>{{$index + 1}}</th>
                <td>{{s.statement}}</td>
                <td ng-repeat="score in s.scores" class="response">
                    <input type="radio" name="{{'q' + ($parent.$index + 1)}}" value="{{score}}" ng-model="scores[$parent.$index]" />
                </td>
            </tr>
        </tbody>
    </table>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Score</h3>
        </div>
        <div class="panel-body">
            <p>
                Most people with depression score between
                <strong>50</strong>
                and
                <strong>69</strong>
                . The highest possible score is
                <strong>80</strong>
                <a href="#note-1">
                    <sup>1</sup>
                </a>
                .
            </p>
            <p>
                Your score:
                <strong>{{score()}}</strong>
                &nbsp;
                <span ng-class="range().stateClass" class="badge">
                    <span ng-class="range().iconClass" class="glyphicon"></span>
                    {{range().description}}
                </span>
                &nbsp;&nbsp;
                <a ng-href="{{mailto()}}" ng-show="checks === survey.length" class="send btn btn-xs btn-primary">
                    <span class="glyphicon glyphicon-envelope"></span>
                    Send Score
                </a>
            </p>
        </div>
    </div>
    <div class="text-muted">
        <p>
            Adapted from Zung
            <a href="#note-2">
                <sup>2</sup>
            </a>
            .
        </p>
        <p>
            <strong>References: </strong>
        </p>
        <ol>
            <li>
                <a id="note-1"></a>
                Carroll BJ, Fielding JM, Blashki TG. Depression rating scales: a critical review. Arch Gen Psychiatry. 1973; 28:361-366.
            </li>
            <li>
                <a id="note-2"></a>
                Zung WWK. A self-rating depression scale. Arch Gen Psychiatry. 1965; 12:63-70
            </li>
        </ol>
    </div>
</div>
