import os
import json
import shutil

import requests

with open('PackerConfig.json', encoding='utf-8') as f:
    PACKER_CONFIG = json.load(f)
    PROJECT_NAME = PACKER_CONFIG['projectName']
    PACK_VERSION = PACKER_CONFIG['packVersion']

if os.environ['event_name'] == 'pull_request_target':
    VERSION = os.environ['event_number']
elif os.environ['event_name'] == 'workflow_dispatch':
    VERSION = os.environ['version']
else:
    VERSION = input('Version: ')
RELEASE_NAME = '-'.join([VERSION, 'CN', PROJECT_NAME, PACK_VERSION])

RESOURCES_PACK_URL = 'https://api.github.com/repos/ShaBaiTianCN/Minecraft-Mod-Language-Package-Not-Included-Language-Package/releases/latest'


def touch_dir(path: str):
    """
    Create folder if not exist.
    :param path: Folder path.
    """
    if not os.path.isdir(path):
        os.makedirs(path)


def copy(file_path: str, check_dir: bool = True):
    """
    Copy file to target folder.
    :param file_path: File path.
    :param check_dir: Enable check dir exist.
    """
    target_path = os.path.join(RELEASE_NAME, file_path)
    if check_dir:
        touch_dir(os.path.dirname(target_path))
    shutil.copyfile(file_path, target_path)


def main():
    # Touch folder
    touch_dir(RELEASE_NAME)

    # Copy file
    for i in PACKER_CONFIG['files']:
        if os.path.isfile(i):
            copy(i)
        else:
            for dirpath, dirnames, filenames in os.walk(i):
                for filename in filenames:
                    copy(os.path.join(dirpath, filename))

    # Download resource pack
    release_info = requests.get(RESOURCES_PACK_URL).json()['assets'][0]
    resourcepacks_dir = os.path.join(RELEASE_NAME, 'resourcepacks')
    resourcepacks_path = os.path.join(resourcepacks_dir, '汉化补充资源包.zip')
    touch_dir(resourcepacks_dir)
    with open(resourcepacks_path, 'wb') as f:
        f.write(requests.get(release_info['browser_download_url']).content)

    # Set release name
    print(f'::set-output name=release_name::{RELEASE_NAME}')


if __name__ == '__main__':
    main()
