import {Module} from "@nestjs/common";
import { TrackModule } from './track/track.module';
import {MongooseModule} from "@nestjs/mongoose";
import { FileModule } from './file/file.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.8vephp0.mongodb.net/spotify-clone?retryWrites=true&w=majority'),
    TrackModule,
    FileModule
  ]
})
export class AppModule {

}
