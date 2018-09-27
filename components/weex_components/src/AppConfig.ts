/**
 * app的配置
 * @author wxup
 * @create 2018-09-27 9:58
 **/


export interface AppConfig {

    /**
     * http 协议
     */
    httpProtocol: string | "http" | "https";

    /**
     * api接口域名
     */
    apiDomain: string;

    /**
     * 静态资源的域名，如果没有则使用api域名
     */
    resourceDomain?: string;

    /**
     * 文件上传地址
     */
    upLoadFileURL?: string;


}
