import NetworkLogic from "../../Shared/NetworkLogic";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CommitData extends cc.Component {

    @property(cc.Node)
    content: [cc.Node] = [];
    @property(cc.Button)
    btnSubmit: cc.Button = null;

    data = null;

    onLoad () {
        this.node.on("COMMITDATA",this.updateUI.bind(this))
    }

    onEnable () {
        console.log("=====子界面打开")

    }
    updateUI(data){
        this.data = data;
        console.log("=====提交方式 data:",data);
        for (let i  = 0; i < this.content.length;i++){
            this.content[i].active = false;
        }
        this.content[data - 1].active = true;
    }

    onBtnClick(event,param){
        if (param === "close"){
            this.node.active = false;
        }
        else if (param === "submit"){

        }
        else if (param === "upLoad"){
            console.log("==== 点击上传");
            //调用SDK
        }
    }

    onDestroy(): void {
        this.node.off("COMMITDATA")
    }
}
