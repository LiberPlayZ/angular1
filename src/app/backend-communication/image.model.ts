import { PointsModel } from "./points_table_model";

export interface ImageModel {
    graph_data: string;
    correlation_coefficient: number;
    points_model: PointsModel
}