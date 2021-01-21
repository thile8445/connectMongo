import { CreateAppListDto } from './dto/applist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { AppList, AppListDocument } from './schema/applist.schema';
import { Model } from 'mongoose';
import { from, Observable, of } from 'rxjs';

@Injectable()
export class AppListService {
  constructor(
    @InjectModel(AppList.name)
    private readonly appListModel: Model<AppListDocument>,
  ) {}
  public getAll(): Observable<AppList[]> {
    return from(this.appListModel.find().exec());
  }
  public updateSaveData(id: string, data: string): Observable<AppList> {
    return from(
      this.appListModel.updateOne({ _id: id }, { $set: { saveData: data } }),
    );
  }
  public create(data: CreateAppListDto): Observable<AppList>{
    const createAppList = new this.appListModel(data);
    return from(createAppList.save());
  }
  public delete(id: string): Observable<AppList>{
      return from(this.appListModel.deleteOne(id));
  }
}
